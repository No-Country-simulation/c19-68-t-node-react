import AppointmentService from '../services/appointments.service.js';

const appointmentsController = {
  async registerAppo(req, res) {
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
      const appointment = await AppointmentService.registerAppo(
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
        .json({ message: "Created successfully", appointment: appointment });
    } catch (error) {
      res.status(error.statusCode || 500).json({ message: error.message });
    }
  },
  getAppoById: async (req, res) => {
    const { state, id } = req.params;
    console.log("Se ha inicia la vista de citas");
    try {
      const AppoById = await AppointmentService.getAppoById(state, id);

      res.status(200).json({ patientDate: AppoById });

    } catch (error) {
      res.status(error.statusCode || 500).json({ message: error.message });
    }
  },
};

export default appointmentsController;