import Calendar from "@/components/Calendar";
import { format } from "@formkit/tempo";
import Link from "next/link";
import React from "react";

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
  _id: string;
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

const PrincipalAppointment = ({ appointment }: Props) => {
  const date = new Date(appointment?.date);
  const day = format(date, "dddd, MMMM D, YYYY", "es");
  const calendar = day.replaceAll(",", " ").split(" ");

  return (
    <article className=" grid grid-cols-2">
      <div className="text-[11.68px] grid items-end grid-rows-2">
        <ul className="">
          <li>
            <span className="text-[15.58px] font-bold">
              Cita {appointment.doctor_id.speciality}
            </span>
          </li>
          <li>
            {appointment.doctor_id.gender == "male" ? "Dr." : "Dra."}{" "}
            {appointment.doctor_id.firstName} {appointment.doctor_id.lastName}
          </li>
          <li>La cita el día de hoy es a las {appointment.startTime}hr</li>
        </ul>
        <Link
          href={appointment.video_call_link}
          className="my-auto w-[141px] h-[34px] bg-[#35799F] text-[#F2F2F2] rounded-[12.17px] font-medium flex justify-center items-center"
        >
          Ingresar
        </Link>
      </div>

      <Calendar
        twClass="justify-self-end"
        sizeCalendar="w-[91px] h-[91px] text-[40px]"
        calendar={calendar}
        sizeDate="text-[13px]"
        sizeDay="text-[35px]"
        sizeMonthAndYear=" text-[13px]"
        key={appointment._id}
      />
    </article>
  );
};

export default PrincipalAppointment;
