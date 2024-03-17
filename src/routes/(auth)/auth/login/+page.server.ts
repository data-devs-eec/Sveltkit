import type { Actions, PageServerLoad } from './$types';
import { message, superValidate } from 'sveltekit-superforms/server';
import { loginFormSchema } from './schema';
import { zod } from 'sveltekit-superforms/adapters';
import { fail } from '@sveltejs/kit';
export const load = (async (event) => {
	const form = await superValidate(zod(loginFormSchema));
	return {
		form
	};
}) satisfies PageServerLoad;

export const actions: Actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, zod(loginFormSchema));
		console.log(form);
		if (!form.valid) {
			return fail(400, { form });
		}
		return message(form, 'Form is valid');
	}
};
