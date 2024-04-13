import type { Actions, PageServerLoad } from './$types';
import { message, superValidate, type Infer, setError } from 'sveltekit-superforms/server';
import { zod } from 'sveltekit-superforms/adapters';
import { loginFormSchema } from './schema';
import { fail } from '@sveltejs/kit';
type MessageType = {
	status: number;
	detail: string;
	token?: string;
};
export const load = (async (event) => {
	const form = await superValidate(zod(loginFormSchema));
	return {
		form
	};
}) satisfies PageServerLoad;

export const actions: Actions = {
	default: async ({ request }) => {
		const form = await superValidate<Infer<typeof loginFormSchema>, MessageType>(
			request,
			zod(loginFormSchema)
		);
		await sleep(2000)
		if (!form.valid) {
			return fail(400, { form });
		}
		if (form.data.password !== 'password') {
			return setError(form, 'password', 'Incorrect password');
		}
		return message(form, {
			status: 200,
			detail: 'You are logged in!'
		});
	}
};
async function sleep(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms))
  }