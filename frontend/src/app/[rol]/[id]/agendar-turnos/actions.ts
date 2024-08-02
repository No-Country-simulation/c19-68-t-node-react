"use server";
import { registerAppo } from "@/components/Agenda/handler";
import { getSession } from "@/utils/getSession";
import axios from "axios";
import { redirect } from "next/navigation"; // Importar el módulo de redirección de Next.js

export const appointmentRegister = async (
  prevState: { error: undefined | string },
  formData: FormData
) => {
  const user: { id?: string; rol?: string } = (await getSession()) as {
    id?: string;
    rol?: string;
  };

  const formatDate = (date: Date | null) => {
    if (date === null) {
      return ""; // or handle the null case as per your requirements
    }
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  // Captar fecha
  const formatedDate = formData.get("selectedDate");

  // Si existe la fecha captada en el formulario transformarla a tipo Date
  const fecha = formatedDate ? new Date(String(formatedDate)) : null;

  // Se crea variable y se formatea la fecha
  const fechaFormateada = formatDate(fecha);
  // Sección de formato de tiempo
  // Se dividen los horarios que se captaban como un solo string dividido por una ","
  const timeFormated = String(formData.get("timeschedule"))?.split(",");

  const data = {
    patient_id: user?.id?.toString() ?? "",
    doctor_id: formData.get("professional"),
    date: fechaFormateada,
    startTime: timeFormated[0],
    endTime: timeFormated[1],
    video_call_link: "Link de videocall",
    reasons: "Reasons example",
    notes: "Example notes",
  };

  console.log("La data del action", data);

  await registerAppo(data);
  let urlREDI = "";
  try {
    console.log("Se inicia el proceso de pago");

    const data = {
      name: "Consulta Dermatología",
      description: "Consulta con dermatologo",
      currency: "usd",
      unit_amount: 3000, //Se pone en centimos, 20000 equivale a 200.00 dolares
      quantity: 1,
      mode: "payment",
      success_url: `http://localhost:3000/${user.rol}/${user.id}/confirmacion-pago`,
      cancel_url: `http://localhost:3000/${user.rol}/${user.id}/agendar-turnos`,
    };

    let response = (
      await axios.post(
        "http://localhost:4700/paymentGateway/createCheckoutSession",
        data
      )
    ).data;
    console.log("Se recibio respuesta del backend");
    console.log("Loi del response: ", response);

    console.log("message: " + response.message);
    console.log("url: " + response.session.url);

    console.log("Redirigiendo a la pagina de Stripe");

    urlREDI = `${response.session.url}`;
  } catch (error) {
    console.log("Excepcion: error.message: " + (error as Error).message);
  }
  redirect(urlREDI);
};
