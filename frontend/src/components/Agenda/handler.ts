"use server";
import axios from "axios";

export const registerAppo = async (data: Record<string, unknown>) => {
  try {
    const response = await axios.post(
      "http://localhost:4700/appointments/registerAppo",
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
