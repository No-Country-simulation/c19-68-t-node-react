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
    const { id, state } = req.params;
    console.log("Se ha inicia la vista de citas");
    try {
      const AppoById = await AppointmentService.getAppoById(id, state);

      res.status(200).json({ patientDate: AppoById });
    } catch (error) {
      res.status(error.statusCode || 500).json({ message: error.message });
    }
  },

  getAppoDoc: async (req, res) => {
    const { id, date } = req.params;
    console.log("Se ha inicia la vista de citas del doctor");
    try {
      const appoByIdDoc = await AppointmentService.getAppoByIdDoc(id, date);

      res.status(200).json({ doctorInfoDate: appoByIdDoc });
    } catch (error) {
      res.status(error.statusCode || 500).json({ message: error.message });
    }
  },

  getFreeSlotDoc: async(req, res) =>{
    const { id, date } = req.params;
    try {
      const slotFree = await AppointmentService.getFreeSlotDoc(id, date);

      res.status(200).json({ slotFree: slotFree });
    } catch (error) {
      res.status(error.statusCode || 500).json({ message: error.message });
    }
  }
};

export default appointmentsController;