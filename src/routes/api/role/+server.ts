import { roleRepository } from '$lib/server/repositories/role_repository';
import { json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
	const roles = await roleRepository.getRoles();
	return json(roles);
};

export const POST: RequestHandler = async ({ request }) => {
	const body: { name: string; label: string } = await request.json();
	const role = await roleRepository.createRole(body);
	return json(role);
};
