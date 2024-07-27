import serviceAppo from "../services/appointments.service.js";

const controllerAppo = {
  registerAppo: async (req, res) => {
    console.log("Se inicia el registro de una cita");
    const {
      patient_id,
      doctor_id,
      date,
      startTime,
      endTime,
      video_call_link,
      reasons,
      notes,
    } = req.body;

    try {
      const appointment = await serviceAppo.registerAppo(
        patient_id,
        doctor_id,
        date,
        startTime,
        endTime,
        video_call_link,
        reasons,
        notes
      );

      res
        .status(201)
        .json({ message: "Created succesfully", appointment: appointment });
    } catch (error) {
      console.log("ERROR: " + error);
      res.status(500).json({ message: error.message });
    }
  },

  getAppoById: async (req, res) => {
    const { state, id } = req.params
    console.log("Se inicia la vista de citas");
    try {
      const AppoById = await serviceAppo.getAppoById(state, id);

      res.status(200).json({ patientDate: AppoById });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

export default controllerAppo;
