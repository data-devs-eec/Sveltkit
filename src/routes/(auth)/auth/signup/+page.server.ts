import { setError, superValidate } from 'sveltekit-superforms';
import type { Actions } from './$types';
import { zod } from 'sveltekit-superforms/adapters';
import { signUpFormSchema } from './schema';
import { fail, redirect } from '@sveltejs/kit';
import { userRepository } from '$lib/server/repositories/user_repository';
import type { User } from '@prisma/client';
import { authRepository } from '$lib/server/repositories/auth_repository';
import { sessionRepository } from '$lib/server/repositories/session_repository';

export const actions: Actions = {
	default: async ({ request, cookies }) => {
		const form = await superValidate(request, zod(signUpFormSchema));
		if (!form.valid) {
			return fail(400, { form });
		}
		const formData = form.data;
		if (formData.password !== formData.passwordConfirmation) {
			return setError(form, 'passwordConfirmation', 'Passwords do not match');
		}
		// check if user exists
		let userExists: User | undefined = await userRepository.getUserWithEmail({
			email: formData.email
		});
		if (userExists) {
			return setError(form, 'email', 'User already exists');
		}
		userExists = await userRepository.getUserWithPhone({ phone: parseInt(formData.phone) });
		if (userExists) {
			return setError(form, 'phone', 'User already exists');
		}
		// create user
		const hashedPassword = await authRepository.hashPassword(formData.password);
		const user = await userRepository.createUser({
			name: formData.name,
			email: formData.email,
			phone: parseInt(formData.phone),
			passwordHash: hashedPassword,
			districtId: formData.district,
			roleId: '661a888b891486130ebc2138',
			designationId: formData.designation
		});
		
		const session = await sessionRepository.createSession({ userId: user.id });
		const sessionCookie = sessionRepository.createSessionCookie(session);
		cookies.set(sessionCookie.name, sessionCookie.value, {
			...sessionCookie.attributes
		});
		console.log(sessionCookie);
		
		return redirect(302, '/app');
	}
};
