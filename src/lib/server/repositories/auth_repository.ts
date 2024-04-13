import { Argon2id } from "oslo/password";

class AuthRepository {
    argon2id = new Argon2id();
    async hashPassword(password:string) : Promise<string> {
        const hashedPassword = await this.argon2id.hash(password);
        return hashedPassword;
    }
}

export const authRepository = new AuthRepository();