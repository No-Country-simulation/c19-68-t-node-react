import { z } from "zod";

export const signUpFormSchema = z.object({
  fullName: z.string().min(5, { message: "Must be 5 or more characters long" }),
  lastName: z.string(),
  country: z.string(),
  phone: z.string(),
  email: z.string().email(),
  bornDate: z.date(),
  speciality: z.string(),
});

export type SignUpType = z.infer<typeof signUpFormSchema>;

export const loginSchema = z.object({
  email: z
    .string()
    .email()
    .min(5, { message: "Must be 5 or more character long" }),
  password: z.string().min(3, { message: "Must be 3 or more character long" }),
});

export type LoginType = z.infer<typeof loginSchema>;
