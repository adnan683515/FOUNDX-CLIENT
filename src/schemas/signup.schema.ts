import { z } from "zod";

export const signUpValidation = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(30, "Name is too long"),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email")
    .min(5, "Email is too short")
    .max(50, "Email is too long"),

  password: z
    .string()
    .trim()
    .min(6, "Password must be at least 6 characters"),

  mobileNumber: z
    .string()
    .trim()
    .min(10, "Mobile number must be at least 10 digits")
    .max(15, "Mobile number is too long")
});
