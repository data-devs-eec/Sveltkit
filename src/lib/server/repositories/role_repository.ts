import type { PrismaClient } from '@prisma/client';
import { prismaClient } from '../db';

class RoleRepository {
	prismaClient: PrismaClient;
	constructor(prismaClient: PrismaClient) {
		this.prismaClient = prismaClient;
	}
	async getRoles() {
		const roles = await this.prismaClient.role.findMany();
		return roles;
	}
	async createRole({ name, label }: { name: string; label: string }) {
		const role = await this.prismaClient.role.create({
			data: { name, label, permissionId: '661a882ddf53401ab223c906' }
		});
		return role;
	}
}

export const roleRepository = new RoleRepository(prismaClient);
