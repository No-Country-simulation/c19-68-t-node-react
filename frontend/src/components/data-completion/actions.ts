"use server";

export const patientCompleteData = async (data: any) => {
  try {
    const response = await fetch(
      "http://localhost:4700/doctors/editProfileDoc",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (response.ok) {
      console.log("Datos enviados correctamente");
    } else {
      console.log("Error al enviar los datos");
    }
  } catch (error) {
    console.log("Error al enviar los datos", error);
  }
};
