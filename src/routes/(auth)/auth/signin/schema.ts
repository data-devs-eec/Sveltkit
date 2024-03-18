import { z } from 'zod';

export const signInFormSchema = z.object({
	name: z.string().max(50),
	email: z.string().email(),
	phone: z.number().min(10),
    
});
