import { designationRepository } from '$lib/server/repositories/desgination_repository';
import type { Designation } from '@prisma/client';
import { json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({}) => {
	const designations: Designation[] = await designationRepository.getDesignations();
	return json(designations);
};

export const POST: RequestHandler = async ({ request }) => {
	const designation: { name: string; label: string } = await request.json();
	const createdDesignation = await designationRepository.createDesignation(designation);
	return json(createdDesignation);
};
