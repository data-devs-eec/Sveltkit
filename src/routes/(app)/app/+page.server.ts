import { sessionRepository } from '$lib/server/repositories/session_repository';
import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	logout: async ({ cookies, locals }) => {
		console.log('logout');
		
		sessionRepository.invalidateSession(locals.session!.id);
		const blankCookie = sessionRepository.createBlankSessionCookie();
		cookies.set(blankCookie.name, blankCookie.value, blankCookie.attributes);
		return redirect(302, '/auth/login');
	}
};
