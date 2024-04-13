import { districtRepository } from '$lib/server/repositories/district_repository';
import type { District } from '@prisma/client';
import { json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({}) => {
	const districts = await districtRepository.getDistricts();
	return json(districts);
};
