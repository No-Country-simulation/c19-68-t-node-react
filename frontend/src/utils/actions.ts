"use server";

import { loginSchema, signUpFormSchema } from "./definitions";
import { createSession } from "./session";

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

  // 2. Peticion para traer datos luego de l avalidacion

  // 3. Crear session
  const user = { id: "2", name: "fullname usertest" };

  await createSession(user.id);
};

export const signup = async (
  prevState: { error: undefined | string },
  formData: FormData
) => {
  // Comprobando la llegada de la data

  // const data = {
  //   fullName: formData.get("fullName"),
  //   lastName: formData.get("lastName"),
  //   country: formData.get("country"),
  //   phone: formData.get("phone"),
  //   email: formData.get("email"),
  //   bornDate: formData.get("bornDate"),
  // };
  // 1. Validate fields

  const validationResult = signUpFormSchema.safeParse({
    fullName: formData.get("fullName"),
    lastName: formData.get("lastName"),
    country: formData.get("country"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    bornDate: formData.get("bornDate"),
  });

  if (!validationResult.success) {
    return { errors: validationResult.error.flatten().fieldErrors };
  }

  // Create user
  // Encrypt password with bcrypt
  // try catch
  // const data = await createUserPost()

  const user = { id: "1", fullName: "User complete name" }; //para pruebas

  // Create session
  await createSession(user.id);
};
