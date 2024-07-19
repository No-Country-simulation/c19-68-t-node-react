import { DoctorDao } from "./doctor.dao.js";
import { PatientDao } from "./patient.dao.js";
import { AppointmentsDao } from "./appointments.dao.js";


export const doctorManager = new DoctorDao()
export const patientManager = new PatientDao()
export const appointmentsManager = new AppointmentsDao()