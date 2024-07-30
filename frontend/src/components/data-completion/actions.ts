"use server";

export const patientCompleteData = async (
  prevState: {
    error: undefined | string;
  },
  formData: FormData
) => {
  const data = {
    dateOfBirth: formData.get("dateOfBirth"),
    age: formData.get("age"),
    height: formData.get("height"),
    weight: formData.get("weight"),
    allergies: formData.get("allergies"),
    medications: formData.get("medications"),
    medicationName: formData.get("medicationName"),
    disability: formData.get("disability"),
    // Disability type falta
    smoking: formData.get("smoking"),
    // Falta frecuencia de fumador
    alcoholConsumption: formData.get("alcoholConsumption"),
    // drinkFrecuency
    psychoactiveSubstances: formData.get("psychoactiveSubstances"),
  };

  console.log("La data que llega al action patientCompleteData: ", data);

  // Validacionems aca - Manejar tipo de datos en otro archivo.

  // try catch para el UPDATE aca
};
