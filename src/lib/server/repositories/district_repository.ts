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
	async createDistrict({ name, label }: { name: string; label: string }) {
		const district = await this.prismaClient.district.create({
			data: {
				name,
				label
			}
		});
		return district;
	}
}

export const districtRepository = new DistrictRepository(prismaClient);
