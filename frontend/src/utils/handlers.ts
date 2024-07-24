"use server";

export const userLogin = async (data: Record<string, unknown>) => {
  try {
    const response = await fetch(
      "https://inmobiliariaasg.schasemback.com/user/logged",
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
    throw new Error(`Failed to login user: ${(error as Error).message}`);
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
      "https://inmobiliariaasg.schasemback.com/doctors/registerDoc",
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
