import type { PrismaClient } from '@prisma/client';
import { prismaClient } from '../db';

class DistrictRepository {
	prismaClient: PrismaClient;
	constructor(prismaClient: PrismaClient) {
		this.prismaClient = prismaClient;
	}
	async getDistricts() {
		return this.prismaClient.district.findMany();
	}
}

export const districtRepository = new DistrictRepository(prismaClient);
