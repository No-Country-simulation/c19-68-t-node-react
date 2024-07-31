"use client";

import { useState } from "react";
import "../components/Sheduled.css";
import Calendar from "./Calendar";
import { format } from "@formkit/tempo";
import Image from "next/image";

interface Props {
  appointment: Appointment;
}

interface Appointment {
  date: string;
  doctor_id: Doctor;
  endTime: string;
  notes: string;
  patient_id: Doctor;
  reasons: string;
  startTime: string;
  state: string;
  video_call_link: string;
  _id: string
}

interface Doctor {
  country: string;
  email: string;
  firstName: string;
  gender: string;
  lastName: string;
  phone: string;
  photo: string;
  professionalCertificates: [string, string];
  speciality: string;
  _id: string;
}



const Scheduled = ({ appointment }: Props) => {

  /* Despligue de la card */
  const [dateOpen, setDateOpen] = useState<Boolean>(false);

  const handleOpenSheduled = () => {
    setDateOpen(true);
  };

  const handleCloseSheduled = () => {
    setDateOpen(false);
  };
  /* Formato de la cita */
  const date = new Date(appointment.date);

  const day = format(date, "dddd, MMMM D, YYYY", "es");

  const dayPrueba = day.replaceAll(",", " ").split(" ");

  return (
    <>
      <article
        className={`relative w-[331.03px] h-[127px] bg-[#89bad845] flex justify-between items-center px-4 rounded-[12.17px] date-${dateOpen}`}
      >
        <ul className="text-[11.68px] flex flex-col gap-[.5px]">
          <li className="text-[15.58px] font-bold">Cita {appointment.doctor_id.speciality} </li>
          <li className="">{ appointment.doctor_id.gender == 'male' ? 'Dr.' : 'Dra.'} {appointment.doctor_id.firstName} {appointment.doctor_id.lastName}</li>
          <li className="ocultar mb-4">
            Progamada a las {appointment.startTime}hrs
          </li>
          <div className="ocultar flex gap-2 text-[11.68px]">
            <span className="flex items-center">
              Reprogramar
              <Image
                src={"/pencil-scheduled.png"}
                alt="arrow up"
                width={12}
                height={12}
                className="w-[12px] h-[12px] "
              />
            </span>
            <p>
              Cancelar <span className="text-red-500 font-semibold">X</span>{" "}
            </p>
          </div>
        </ul>

        <div className="flex flex-col items-center justify-end ocultar">
          <Calendar
            calendar={dayPrueba}
            twClass=""
            sizeCalendar=" w-[59px] h-[59px]"
            sizeDate="text-[9px]"
            sizeDay="text-[22px]"
            sizeMonthAndYear=" text-[9.74px]"
          />
        </div>

        <p
          className="absolute top-2 right-4 text-[20px] button__open"
          onClick={handleOpenSheduled}
        >
          <Image
            src={"/arrow-down.png"}
            alt="arrow down"
            width={12}
            height={12}
          />
        </p>
        <p
          className="absolute top-2 right-4 text-[20px] button__close"
          onClick={handleCloseSheduled}
        >
          <Image src={"/arrow-up.png"} alt="arrow up" width={12} height={12} />
        </p>
      </article>
    </>
  );
};

export default Scheduled;
