"use server";

import {
  loginSchema,
  signUpFormSchema,
  signUpPatientFormSchema,
} from "./definitions";
import { createDoctor, createPatient, userLogin } from "./handlers";
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

  const result = await userLogin(data);

  if (result.message) {
    return { error: result.message };
  }
  console.log(result);

  // Create session

  await createSession(result);

  return result;
};

export const signup = async (
  prevState: { error: undefined | string },
  formData: FormData
) => {
  console.log("Lo que trae el signup para doctor: ", formData);

  const data = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    gender: formData.get("gender"),
    email: formData.get("email"),
    country: formData.get("country"),
    speciality: formData.get("speciality"),
    phone: formData.get("phone"),
    password: formData.get("password"),
    repassword: formData.get("repassword"),
    professionalCertificates: formData.get("professionalCertificates"),
  };

  console.log("Lo de la data: ", data);

  const validationResult = signUpFormSchema.safeParse(data);

  if (!validationResult.success) {
    return { errors: validationResult.error.flatten().fieldErrors };
  }

  const result = await createDoctor(data);

  if (result.message) {
    return { error: result.message };
  }

  await createSession(result);
};

export const signupPatient = async (
  prevState: { error: undefined | string },
  formData: FormData
) => {
  console.log("Lo que trae el signup para paciente: ", formData);

  const data = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    gender: formData.get("gender"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    password: formData.get("password"),
    repassword: formData.get("repassword"),
  };

  const validationResult = signUpPatientFormSchema.safeParse(data);

  if (!validationResult.success) {
    return { errors: validationResult.error.flatten().fieldErrors };
  }

  // User Registration
  const result = await createPatient(data);

  if (result.message) {
    return { error: result.message };
  }
  await createSession(result);
};
