import { Argon2id } from 'oslo/password';

class AuthRepository {
	argon2id = new Argon2id();
	async hashPassword(password: string): Promise<string> {
		const hashedPassword = await this.argon2id.hash(password);
		return hashedPassword;
	}
	async verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
		const isValid = await this.argon2id.verify(hashedPassword, password);
		return isValid;
	}
}

export const authRepository = new AuthRepository();
