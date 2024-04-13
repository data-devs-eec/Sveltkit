import { z } from 'zod';

export const signUpFormSchema = z.object({
	name: z.string().min(3).max(255),
	email: z.string().email(),
	phone: z.string().min(10).max(10),
	district: z.string().min(3).max(255),
	designation: z.string().min(3).max(255),
	password: z.string().min(8).max(255),
	passwordConfirmation: z.string().min(8).max(255)
});
