import type { PrismaClient, Session } from '@prisma/client';
import { prismaClient } from '../db';

type CookieType = {
	name: string;
	value: string;
	attributes: {
		httpOnly?: boolean;
		secure?: boolean;
		path: string;
		expires?: Date;
		sameSite?: 'strict' | 'lax' | 'none';
	};
};
class SessionRepository {
	prismaClient: PrismaClient;
	sessionCookieName = 'session-cookie';
	blankSessionCookieName = 'blank-session-cookie';
	constructor(prismaClient: PrismaClient) {
		this.prismaClient = prismaClient;
	}
	getExpiryDate() {
		return new Date(Date.now() + 1000 * 60 * 60 * 24 * 7); // 7 days
	}
	async createSession({ userId }: { userId: string }): Promise<Session> {
		const exisitingSession = await this.prismaClient.session.findFirst({
			where: {
				userId
			}
		});
		if (exisitingSession) {
			await this.prismaClient.session.delete({
				where: {
					id: exisitingSession.id
				}
			});
		}
		const newSession = await this.prismaClient.session.create({
			data: {
				expiresAt: this.getExpiryDate(),
				userId: userId
			}
		});
		return newSession;
	}
	async validateSession(sessionId: string) {
		// Get Session Token
		const session = await this.prismaClient.session.findFirst({
			where: {
				id: sessionId
			}
		});
		// If null return false
		if (session === null) {
			return { valid: false };
		}
		// Check Expiry Date
		if (session.expiresAt < new Date()) {
			await this.prismaClient.session.delete({
				where: {
					id: session.id
				}
			});
			return { valid: false };
		}
		// Get User
		const user = await this.prismaClient.user.findFirst({
			where: {
				id: session.userId
			}
		});
		// If null return false
		if (user === null) {
			return { valid: false };
		}
		return { user, session, valid: true };
	}

	async invalidateSession(sessionId: string) {
		await this.prismaClient.session.delete({
			where: {
				id: sessionId
			}
		});
	}
	createSessionCookie(session: Session) {
		const cookie: CookieType = {
			name: this.sessionCookieName,
			value: session.id,
			attributes: {
				httpOnly: true,
				secure: true,
				path: '/',
				expires: session.expiresAt,
				sameSite: 'strict'
			}
		};
		return cookie;
	}
	createBlankSessionCookie() {
		const cookie: CookieType = {
			name: this.blankSessionCookieName,
			value: '',
			attributes: {
				httpOnly: true,
				secure: true,
				path: '/',
				expires: new Date(0),
				sameSite: 'strict'
			}
		};
		return cookie;
	}
}

export const sessionRepository = new SessionRepository(prismaClient);
