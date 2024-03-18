import { readFileSync } from 'fs';
import { EncryptJWT, importPKCS8, importSPKI, jwtDecrypt, type JWTPayload } from 'jose';
// openssl rsa -in private_key.pem -pubout -out public_key.pem
export async function createJwt(payload: JWTPayload, exp: string) {
	const publicKeyString = readFileSync('public_key.pem', 'utf-8');
	const publicKey = await importSPKI(publicKeyString, 'RS256');
	const token = await new EncryptJWT(payload)
		.setProtectedHeader({
			alg: 'RSA-OAEP-256',
			enc: 'A256GCM'
		})
		.setExpirationTime(exp)
		.encrypt(publicKey);
	return token;
}

export async function decryptJwt(token: string) {
	const privateKeyString = readFileSync('private_key.pem', 'utf-8');
	const privateKey = await importPKCS8(privateKeyString, 'RS256');
	try {
		const { payload } = await jwtDecrypt(token, privateKey);
		return payload;
	} catch (err) {
		console.log(err);
		return undefined;
	}
}
