import type { PageLoad } from './$types';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { signUpFormSchema } from './schema';
import type { District } from '@prisma/client';

export const load = (async (event) => {
	const form = await superValidate(zod(signUpFormSchema));
	const districts = await event.fetch('/api/district');
	const designations = await event.fetch('/api/designation');
	const districtsJson: District[] = await districts.json();
	const designationsJson = await designations.json();
	return {
		form,
		districts: districtsJson,
		designations: designationsJson
	};
}) satisfies PageLoad;
