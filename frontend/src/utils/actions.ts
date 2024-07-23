"use server";

import {
  loginSchema,
  signUpFormSchema,
  signUpPatientFormSchema,
} from "./definitions";
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

  console.log("La data que llega al login: ", formData);

  const validationResult = loginSchema.safeParse(data);

  if (!validationResult.success) {
    return { errors: validationResult.error.flatten().fieldErrors };
  }

  // 2. Peticion para traer datos luego de l avalidacion

  // 3. Crear session
  // const user = { id: "2", name: "fullname usertest" };

  // await createSession(user.id);
};

export const signup = async (
  prevState: { error: undefined | string },
  formData: FormData
) => {
  console.log("Lo que trae el signup para doctor: ", formData);
};

export const signupPatient = async (
  prevState: { error: undefined | string },
  formData: FormData
) => {
  console.log("Lo que trae el signup para paciente: ", formData);

  const validationResult = signUpPatientFormSchema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    password: formData.get("password"),
    repassword: formData.get("repassword"),
  });

  if (!validationResult.success) {
    return { errors: validationResult.error.flatten().fieldErrors };
  }

  // Create user
  // Encrypt password with bcrypt
  // try catch
  // const data = await createUserPost()

  // const user = { id: "1", fullName: "User complete name" }; //para pruebas

  // Create session
  // await createSession(user.id);
};
