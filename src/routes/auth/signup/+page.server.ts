import { fail, redirect } from "@sveltejs/kit";
import { createUser } from "$lib/auth";
import { SESSION_COOKIE_NAME } from "$lib/constants";
import { db } from "$lib/database.js";
import bcrypt from "bcrypt";
import crypto from "crypto"; // Import crypto module



export const actions = {
  default: async ({ request, cookies }) => {
    const data = await request.formData();

    const email = String(data.get("email"));
    const password = String(data.get("password"));

    try {
      // Create user in your custom authentication system
      const registerResult = await createUser(email, password);

      // Create user in your database
      await db.user.create({
        data: {
          email,
          passwordHash: await bcrypt.hash(password, 10),
          userAuthToken: crypto.randomUUID(),
    
        },
      })

      // Set session cookie
      cookies.set(SESSION_COOKIE_NAME, registerResult.id, {
        path: "/",
        httpOnly: false,
      });
    } catch (error) {
      if (error instanceof Error) {
        // Handle specific errors
        return fail(500, {
          email,
          password,
          message: error.message,
        });
      } else {
        // Handle other types of errors
        return fail(500, {
          email,
          password,
          message: "Unknown error occurred on the server",
        });
      }
    }

    // Redirect after successful registration
    throw redirect(303, "/");
  },
};
