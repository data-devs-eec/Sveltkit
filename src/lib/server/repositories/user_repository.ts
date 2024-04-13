import type { PrismaClient, User } from '@prisma/client';
import { prismaClient } from '../db';

class UserRepository {
	prismaClient: PrismaClient;
	constructor({ prismaClient }: { prismaClient: PrismaClient }) {
		this.prismaClient = prismaClient;
	}
	async getUserWithEmail({ email }: { email: string }): Promise<User | undefined> {
		const user = await this.prismaClient.user.findFirst({
			where: {
				email
			}
		});
		if (user === null) {
			return undefined;
		}
		return user;
	}
	async getUserWithPhone({ phone }: { phone: number }): Promise<User | undefined> {
		const user = await this.prismaClient.user.findFirst({
			where: {
				phone
			}
		});
		if (user === null) {
			return undefined;
		}
		return user;
	}
	async createUser(userData: {
		name: string;
		email: string;
		phone: number;
		passwordHash: string;
		districtId: string;
		designationId: string;
		roleId: string;
	}): Promise<User> {
		const user = await this.prismaClient.user.create({
			data: {
				name: userData.name,
				email: userData.email,
				phone: userData.phone,
				passwordHash: userData.passwordHash,
				designationId: userData.designationId,
				districtId: userData.districtId,
				roleId: "USER"
			}
		});
		return user;
	}
}

export const userRepository = new UserRepository({
	prismaClient: prismaClient
});
