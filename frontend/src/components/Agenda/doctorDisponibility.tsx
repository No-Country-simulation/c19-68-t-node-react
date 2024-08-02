"use client";
import { useEffect, useState } from "react";
import CustomSelect from "../ui/customSelect";
import Doctor from "../program-date/PatientAppointment/Doctor";
import { fetcher } from "@/utils/lib/fetcher";
import useSWR from "swr";

interface DoctorDisponibilityProps {
  day: Date | null;
  doctorId: Doctor["id"];
}

const DoctorDisponibility = ({ day, doctorId }: DoctorDisponibilityProps) => {
  const [time, setTime] = useState(["", ""]);
  const [reminder, setReminder] = useState("");
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [filteredDisponibility, setFilteredDisponibility] =
    useState<string[]>();

  const handleTimeSelect = (value: string, key: string) => {
    setTime([value, key]);
  };

  const handleReminderSelect = (value: string) => {
    setReminder(value);
  };
  console.log("El dia y su formato: ", day);

  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    if (day) {
      const dayFormated = formatDate(day);
      setSelectedDate(dayFormated);
    }
  }, [day]);

  const { data, error, isLoading } = useSWR(
    selectedDate
      ? `http://localhost:4700/appointments/getFreeSlotDoc/${doctorId}/${selectedDate}`
      : null,
    fetcher
  );

  const hourExample = data
    ? data.slotFree.map((slot: [string, string]) => ({
        label: slot[0],
        value: slot[0],
        endTime: slot[1],
      }))
    : [];

  // console.log("DATA", data);

  // console.log("HOUREXAMPLE", hourExample);

  useEffect(() => {
    if (data) {
      console.log("data", data);
    }
  }, [data]);

  if (error) return <div>error</div>;
  if (isLoading) return <div>loading...</div>;

  const reminderEx = [
    { label: "5 minutos antes", value: 5 },
    { label: "10 minutos antes", value: 10 },
    { label: "15 minutos antes", value: 15 },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Fechas disponibles</h2>
      <CustomSelect
        title="Horarios disponibles"
        options={hourExample}
        onSelect={(value: string) => handleTimeSelect(value, "")}
        name="timeschedule"
        horarios={true}
      />
      {/* <CustomSelect
        title="Crear recordatorio"
        options={reminderEx}
        onSelect={handleReminderSelect}
        name="reminder"
      /> */}
    </div>
  );
};

export default DoctorDisponibility;
