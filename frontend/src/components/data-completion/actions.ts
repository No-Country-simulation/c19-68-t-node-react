"use server";

import { redirect } from "next/navigation";

export const doctorCompleteData = async (data: any, id: string) => {
  try {
    const response = await fetch(
      `http://localhost:4700/doctors/editProfileDoc/${id}`,
      {
        method: "PATCH",
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

export const patientCompleteData = async (data: any, id: string) => {
  console.log("La data que llega: ", data);
  console.log("ID?: ", id);

  redirect(`/paciente/${id}`);

  // try {
  //   const response = await fetch(
  //     `http://localhost:4700/patients/editProfilePat/${id}`,
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(data),
  //     }
  //   );

  //   if (response.ok) {
  //     return { success: true };
  //   } else {
  //     console.error("Error al enviar los datos");
  //     return { success: false };
  //   }
  // } catch (error) {
  //   console.error("Error al enviar los datos", error);
  //   return { success: false };
  // }
};
