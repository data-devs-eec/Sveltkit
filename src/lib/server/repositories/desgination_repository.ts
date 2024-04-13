import type { PrismaClient } from '@prisma/client';
import { prismaClient } from '../db';

class DesignationRepository {
	prismaClient: PrismaClient;
	constructor(prismaClient: PrismaClient) {
		this.prismaClient = prismaClient;
	}
	async getDesignations() {
		return this.prismaClient.designation.findMany();
	}
	async createDesignation({ name, label }: { name: string; label: string }) {
		const district = await this.prismaClient.designation.create({
			data: {
				name,
				label
			}
		});
		return district;
	}
}

export const designationRepository = new DesignationRepository(prismaClient);
