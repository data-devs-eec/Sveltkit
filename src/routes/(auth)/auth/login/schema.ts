import { z } from "zod";
 
export const formSchema = z.object({
  username: z.string().email(),
  password:z.string().min(8).max(50),
});
 
