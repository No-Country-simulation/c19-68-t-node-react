import AppointmentService from '../services/appointments.service.js';

class AppointmentsController {
  async registerAppo(req, res) {
    console.log("Se inicia el registro de una cita");
    const { patient_id, doctor_id, date, startTime, endTime, video_call_link, reasons, notes } = req.body;

    try {
      const appointment = await AppointmentService.registerAppo(patient_id, doctor_id, date, startTime, endTime, video_call_link, reasons, notes);
      res.status(201).json({ message: "Created succesfully", appointment: appointment });
    } catch (error) {
      res.status(error.statusCode || 500).json({ message: error.message });
    }
  }
}

export default new AppointmentsController();