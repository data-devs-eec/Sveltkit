import { sessionRepository } from '$lib/server/repositories/session_repository';
import { json, redirect, type Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

const authHandler: Handle = async ({ event, resolve }) => {
	const sessionId = event.cookies.get(sessionRepository.sessionCookieName);
	if (!sessionId || sessionId === sessionRepository.blankSessionCookieName) {
		event.locals.user = undefined;
		event.locals.session = undefined;
		return resolve(event);
	}
	const { session, user, valid } = await sessionRepository.validateSession(sessionId);
	if (session === undefined || !valid || user === undefined) {
		const sessionCookie = sessionRepository.createBlankSessionCookie();
		event.cookies.set(sessionCookie.name, sessionCookie.value, {
			...sessionCookie.attributes
		});
		event.locals.user = undefined;
		event.locals.session = undefined;
		return resolve(event);
	}
	if (session && valid && user) {
		const sessionCookie = sessionRepository.createSessionCookie(session);
		// sveltekit types deviates from the de-facto standard
		// you can use 'as any' too
		event.cookies.set(sessionCookie.name, sessionCookie.value, {
			...sessionCookie.attributes
		});
	}
	event.locals.user = user;
	event.locals.session = session;
	return resolve(event);
};

const routeHandler: Handle = async ({ event, resolve }) => {
	
	if (event.url.pathname.startsWith('/app') && event.locals.user === undefined) {
		return redirect(302, '/auth/login');
	}
	if (event.url.pathname.startsWith('/auth') && event.locals.user) {
		return redirect(302, '/app');
	}
	if (event.url.pathname.startsWith('/api/protected') && event.locals.user === undefined) {
		return json({ error: 'Unauthorized' }, { status: 401 });
	}
	return resolve(event);
};
export const handle: Handle = sequence(authHandler, routeHandler);
