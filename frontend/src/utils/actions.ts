"use server";

import { loginSchema, signUpFormSchema } from "./definitions";

export const login = async (
  prevState: { error: undefined | string },
  formData: FormData
) => {
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  // 1. Validate fields

  const validationResult = loginSchema.safeParse(data);

  if (!validationResult.success) {
    return { errors: validationResult.error.flatten().fieldErrors };
  }
};

export const signup = (
  prevState: { error: undefined | string },
  formData: FormData
) => {
  // Comprobando la llegada de la data

  const data = {
    fullName: formData.get("fullName"),
    lastName: formData.get("lastName"),
    country: formData.get("country"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    bornDate: formData.get("bornDate"),
  };
  // 1. Validate fields

  const validationResult = signUpFormSchema.safeParse(data);

  if (!validationResult.success) {
    return { errors: validationResult.error.flatten().fieldErrors };
  }

  // Create user
};
