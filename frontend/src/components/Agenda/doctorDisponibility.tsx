"use client";
import { useState } from "react";
import CustomSelect from "../ui/customSelect";

const DoctorDisponibility = () => {
  const [time, setTime] = useState("");
  const [reminder, setReminder] = useState("");

  const handleTimeSelect = (value: string) => {
    setTime(value);
  };

  const handleReminderSelect = (value: string) => {
    setReminder(value);
  };

  const hourExample = [
    {
      label: "08:00",
      value: "08:00",
    },
    {
      label: "09:00",
      value: "09:00",
    },
    {
      label: "10:00",
      value: "10:00",
    },
    {
      label: "11:00",
      value: "11:00",
    },
  ];

  const reminderEx = [
    {
      label: "5 minutos antes",
      value: 5,
    },
    {
      label: "10 minutos antes",
      value: 10,
    },
    {
      label: "15 minutos antes",
      value: 15,
    },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Fechas disponibles</h2>

      {/* Disponibility Time*/}
      {/* Days available calendar */}

      {/* Schedules */}
      <CustomSelect
        title="Horarios disponibles"
        options={hourExample}
        onSelect={handleTimeSelect}
      />
      {/* Reminder */}
      <CustomSelect
        title="Crear recordatorio"
        options={reminderEx}
        onSelect={handleTimeSelect}
      />
    </div>
  );
};

export default DoctorDisponibility;
