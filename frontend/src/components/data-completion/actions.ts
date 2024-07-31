"use server";

export const patientCompleteData = async (data: any, id: string) => {
  try {
    const response = await fetch(
      `http://localhost:4700/doctors/editProfileDoc/${id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (response.ok) {
      return { success: true };
    } else {
      console.error("Error al enviar los datos");
      return { success: false };
    }
  } catch (error) {
    console.error("Error al enviar los datos", error);
    return { success: false };
  }
};
