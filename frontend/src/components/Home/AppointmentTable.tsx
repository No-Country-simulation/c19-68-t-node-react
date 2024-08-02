"use client";

import React from "react";
import Appointment from "./Appointment";

interface AppointmentData {
  _id: string;
  patient_id: string;
  doctor_id: string;
  date: string;
  startTime: string;
  endTime: string;
  state: string;
  video_call_link: string;
  reasons: string;
  notes: string;
}

interface AppointmentsTableProps {
  data: {
    doctorInfoDate: AppointmentData[];
  };
}

const AppointmentsTable: React.FC<AppointmentsTableProps> = ({ data }) => {
  const appointments = data.doctorInfoDate;

  return (
    <div className="flex flex-col gap-3 mt-6">
      {appointments && appointments.length > 0 ? (
        appointments.map((appointment) => (
          <Appointment
            key={appointment._id}
            time={`${appointment.startTime} - ${appointment.endTime}`}
            patientName={appointment.patient_id} 
            appointmentType={appointment.reasons}
            onJoin={() => {
              // Lógica para unirse a la videollamada
              console.log(`Joining call for appointment at ${appointment.startTime}`);
              window.open(appointment.video_call_link, '_blank');
            }}
          />
        ))
      ) : (
        <p>No hay citas disponibles</p>
      )}
    </div>
  );
};

export default AppointmentsTable;