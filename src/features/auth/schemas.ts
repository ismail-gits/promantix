import { z } from "zod";

export const signUpSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email(),
  password: z.string().min(8, "Password must contain atleast 8 characters")
})

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, "Password is required")
})