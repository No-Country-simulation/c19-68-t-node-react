export const appointmentRegister = async (
  prevState: { error: undefined | string },
  formData: FormData
) => {
  // console.log("La data que llega al action: ", formData);

  const data = {
    patient_id: "66a2a7cdc848b42644af0413", // la de lucia
    doctor_id: formData.get("professional"),
    date: formData.get("selectedDate"),
    startTime: formData.get("timeschedule"),
    endTime:
      (
        parseInt(formData.get("timeschedule")?.slice(0, 2)?.toString() ?? "0") +
        1
      ).toString() +
      (formData.get("timeschedule")?.slice(2, 6)?.toString() ?? "0"),
    video_call_link: "Link de videocall",
    reason: "Reasons example",
    note: "Example notes",
  };

  console.log("La data del action", data);
};
