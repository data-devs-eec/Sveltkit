import { districtRepository } from '$lib/server/repositories/district_repository';
import type { District } from '@prisma/client';
import { json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({}) => {
	const districts : District[] = await districtRepository.getDistricts();
	return json(districts);
};

export const POST: RequestHandler = async ({ request }) => {
	const district: { name: string; label: string } = await request.json();
	const createdDistrict = await districtRepository.createDistrict(district);
	return json(createdDistrict);
};
