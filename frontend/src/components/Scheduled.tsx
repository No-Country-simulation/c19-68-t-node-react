"use client";

import { useState } from "react";
import "../components/Sheduled.css";

interface Props {
  appointment: Appointment;
  calendar: string[];
}

interface Appointment {
  title: string;
  doctor: string;
  date: string;
  hour: number;
}

const Scheduled = ({ appointment, calendar }: Props) => {
  const [dateOpen, setDateOpen] = useState<Boolean>(false);

  const handleOpenSheduled = () => {
    setDateOpen(true);
  };

  const handleCloseSheduled = () => {
    setDateOpen(false);
  };

  return (
    <>
      <article
        className={`relative w-[331.03px] bg-[#D9D9D9] flex justify-between items-center px-4 rounded-[12.17px] date-${dateOpen}`}
      >
        
          
          <ul className="text-[11.68px]">
            <li className="text-[15.58px] font-bold">{appointment.title}</li>
            <li className="">{appointment.doctor}</li>
            <li className="ocultar">Progamada a las {appointment.hour}hrs</li>
          </ul>

          <div className="flex flex-col items-center ocultar">
            <div className="w-[40.41px] h-[40.41px] text-[28px] text-center border-2 border-solid">
              {calendar[0]}
            </div>
            <span className="capitalize text-[9.74px] font-bold">
              {calendar[1]} {calendar[2]}
            </span>
          </div>
          <div className="ocultar absolute bottom-2 right-4 text-[11.68px]">
            <span>Reprogramar</span> <span>Cancelar</span>
          </div>
          <p
            className="absolute top-0 right-3 text-[20px] button__open"
            onClick={handleOpenSheduled}
          >
            ⬇
          </p>
          <p
            className="absolute top-0 right-3 text-[20px] button__close"
            onClick={handleCloseSheduled}
          >
            ⬆
          </p>
      </article>
    </>
  );
};

export default Scheduled;
