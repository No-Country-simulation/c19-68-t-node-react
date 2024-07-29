export const appointmentRegister = async (
  prevState: { error: undefined | string },
  formData: FormData
) => {
  const data = {
    patientId: "66a2a7cdc848b42644af0413", // la de lucia
    professional: formData.get("professional"),
    selectedDate: formData.get("selectedDate"),
  };

  console.log("La data del action", data);
};
