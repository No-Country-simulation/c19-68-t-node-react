"use client";

import React from "react";

interface AppointmentProps {
  time: string;
  patientName: string;
  appointmentType: string;
  onJoin: () => void;
}

const Appointment: React.FC<AppointmentProps> = ({ time, patientName, appointmentType, onJoin }) => {
  return (
    <div className="flex items-center min-w-80">
      <div className="flex items-center mr-3 min-w-12">
        <p className="text-xs">{time}</p>
      </div>
      <div className="flex flex-col text-sm mr-auto">
        <p>{patientName}</p>
        <p className="text-xs">Type: {appointmentType}</p>
      </div>
      <div className="text-sm">
        <button onClick={onJoin} className="cursor-pointer px-2 py-1">
          <a href="#">Enter</a>
        </button>
      </div>
    </div>
  );
};

export default Appointment;
