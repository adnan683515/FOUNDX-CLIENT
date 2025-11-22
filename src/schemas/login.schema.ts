import z from "zod";



export const loginValidationSchema = z.object({
    email: z

        .string()
        .trim()
        .email("Please enter a valid email")
        .regex(
            /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
            "Invalid email format"
        )
        .min(5, "Email is too short")
        .max(50, "Email is too long"),


    password: z
        .string()
        .trim()
        .min(6, "Password must be at least 6 characters")
});
