import type { Actions, PageServerLoad } from './$types';
import { message, superValidate, type Infer, setError } from 'sveltekit-superforms/server';
import { zod } from 'sveltekit-superforms/adapters';
import { loginFormSchema } from './schema';
import { fail, redirect } from '@sveltejs/kit';
import { userRepository } from '$lib/server/repositories/user_repository';
import { authRepository } from '$lib/server/repositories/auth_repository';
import { sessionRepository } from '$lib/server/repositories/session_repository';

export const load = (async (event) => {
	const form = await superValidate(zod(loginFormSchema));
	return {
		form
	};
}) satisfies PageServerLoad;

export const actions: Actions = {
	default: async ({ request, cookies }) => {
		const form = await superValidate(request, zod(loginFormSchema));
		if (!form.valid) {
			return fail(400, { form });
		}
		// check if user exists
		const user = await userRepository.getUserWithEmail({ email: form.data.email });
		if (!user) {
			return setError(form, 'email', 'User does not exist');
		}
		// check password
		const passwordMatch = await authRepository.verifyPassword(
			form.data.password,
			user.passwordHash
		);
		if (!passwordMatch) {
			return setError(form, 'password', 'Incorrect password');
		}

		const session = await sessionRepository.createSession({ userId: user.id });
		const sessionCookie = sessionRepository.createSessionCookie(session);
		cookies.set(sessionCookie.name, sessionCookie.value, {
			...sessionCookie.attributes
		});
		return redirect(302, '/app');
	}
};
async function sleep(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
