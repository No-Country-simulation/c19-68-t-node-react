import Calendar from "@/components/Calendar";
import { format } from "@formkit/tempo";
import React from "react";

interface Props {
  appointment: Appointment;
}

interface Appointment {
  id: string;
  patient_id: string;
  doctor_data: Doctor;
  date: string;
  startTime: string;
  endTime: string;
  video_call_link: string;
  state: string;
  reasons: string;
  notes: string;
}

interface Doctor {
  id: string;
  photo: string;
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  password: string;
  professionalCertificates: [string, string];
  speciality: string;
  phone: string;
  country: string;
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
              Cita {appointment.doctor_data.speciality}
            </span>
          </li>
          <li>{ appointment.doctor_data.gender == 'male' ? 'Dr.' : 'Dra.'} {appointment.doctor_data.firstName} {appointment.doctor_data.lastName}</li>
          <li>La cita el día de hoy es a las {appointment.startTime}hr</li>
        </ul>
        <button className="my-auto w-[141px] h-[34px] bg-[#35799F] text-[#F2F2F2] rounded-[12.17px] font-medium">
          Ingresar
        </button>
      </div>

      <Calendar
        twClass="justify-self-end"
        sizeCalendar="w-[91px] h-[91px] text-[40px]"
        calendar={calendar}
        sizeDate="text-[13px]"
        sizeDay="text-[35px]"
        sizeMonthAndYear=" text-[13px]"
      />
    </article>
  );
};

export default PrincipalAppointment;
