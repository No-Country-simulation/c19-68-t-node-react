import { DoctorDao } from "./doctor.dao.js";
import { PatientDao } from "./patient.dao.js";
import { AppointmentsDao } from "./appointments.dao.js";
import { MedicalRecordsDao } from "./medicalRecords.dao.js"


export const doctorManager = new DoctorDao()
export const patientManager = new PatientDao()
export const appointmentsManager = new AppointmentsDao()
export const medicalManager = new MedicalRecordsDao();