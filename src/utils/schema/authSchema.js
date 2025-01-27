import * as z from "zod";

export const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }).trim(),
  password: z
    .string()
    .min(8, { message: "Must be 8 or more characters long" })
    .trim(),
});

export const registerSchema = z
  .object({
    name: z
      .string()
      .min(3, {
        message: "Name Must be 8 or more characters long",
      })
      .trim(),
    email: z.string().email({ message: "Invalid email address" }).trim(),
    password: z
      .string()
      .min(8, { message: "Password Must be 8 or more characters long" })
      .trim(),
    password_confirmation: z
      .string()
      .min(8, {
        message: "Password Confirmation Must be 8 or more characters long",
      })
      .trim(),
  })
  .refine(
    ({ password_confirmation, password }) => password === password_confirmation,
    {
      message: "Passwords do not match",
      path: ["password_confirmation"],
    }
  );
