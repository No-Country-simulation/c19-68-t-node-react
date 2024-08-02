"use server";
import axios from "axios";

export const userLogin = async (data: Record<string, unknown>) => {
  try {
    const response = await axios.post(
      "https://e-medicine-backend.vercel.app/auth",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        `Failed to login user: ${error.response?.data.message || error.message}`
      );
    } else {
      throw new Error("Failed to login user: An unknown error occurred");
    }
  }
};

export const createPatient = async (data: Record<string, unknown>) => {
  try {
    const response = await fetch(
      "https://e-medicine-backend.vercel.app/patients/registerPat",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      const errorDetails = await response.json();
      throw new Error(
        `Failed to create user: ${errorDetails.message || response.statusText}`
      );
    }

    return await response.json();
  } catch (error: unknown) {
    throw new Error(`Failed to create user: ${(error as Error).message}`);
  }
};

export const createDoctor = async (data: Record<string, unknown>) => {
  try {
    //"https://e-medicine-backend.vercel.app/doctors/registerDoc"
    //"https://jkqp4xfb-7898.brs.devtunnels.ms/doctors/registerDoc"
    const response = await fetch(
      "https://e-medicine-backend.vercel.app/doctors/registerDoc",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      const errorDetails = await response.json();
      throw new Error(
        `Failed to create Doctor: ${
          errorDetails.message || response.statusText
        }`
      );
    }
    return await response.json();
  } catch (error: unknown) {
    throw new Error(
      `Failed to create doctor user: ${(error as Error).message}`
    );
  }
};
