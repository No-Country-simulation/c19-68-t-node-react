import { z } from "zod";

export const signUpFormSchema = z
  .object({
    firstName: z
      .string()
      .min(5, { message: "First name must be 5 or more characters long" }),
    lastName: z
      .string()
      .min(5, { message: "Last name must be 5 or more characters long" }),
    country: z
      .string()
      .min(2, { message: "Country must be at least 2 characters long" }),
    gender: z.string().min(1, { message: "Gender is required" }),
    phone: z
      .string()
      .min(10, { message: "Phone number must be at least 10 characters long" }),
    email: z.string().email({ message: "Invalid email address" }),
    speciality: z
      .string()
      .min(3, { message: "Speciality must be at least 3 characters long" }),
    professionalCertificates: z
      .string()
      .min(8, { message: "URL certificate must be 8 or more characters long" }),
    // professionalCertificates: z.array(z.string()).nonempty({
    //   message: "At least one professional certificate is required",
    // }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" }),
    repassword: z.string().min(8, {
      message: "Confirm password must be at least 8 characters long",
    }),
  })
  .refine((data) => data.password === data.repassword, {
    message: "Passwords must match",
    path: ["repassword"], // path of error
  });

export type SignUpType = z.infer<typeof signUpFormSchema>;

export const signUpPatientFormSchema = z
  .object({
    firstName: z
      .string()
      .min(5, { message: "First name must be 5 or more characters long" }),
    lastName: z
      .string()
      .min(5, { message: "Last name must be 5 or more characters long" }),
    gender: z.string().min(1, { message: "Gender is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    phone: z
      .string()
      .min(10, { message: "Phone number must be at least 10 characters long" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" }),
    repassword: z.string().min(8, {
      message: "Confirm password must be at least 8 characters long",
    }),
  })
  .refine((data) => data.password === data.repassword, {
    message: "Passwords must match",
    path: ["repassword"], // path of error
  });

export type SignUpPatientType = z.infer<typeof signUpPatientFormSchema>;

export const loginSchema = z.object({
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .min(5, { message: "Email must be 5 or more characters long" }),
  password: z
    .string()
    .min(3, { message: "Password must be 3 or more characters long" }),
});

export type LoginType = z.infer<typeof loginSchema>;
