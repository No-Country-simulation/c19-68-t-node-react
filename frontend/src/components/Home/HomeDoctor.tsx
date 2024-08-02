"use client";
import Image from "next/image";
import {
  useState,
  useEffect,
  AwaitedReactNode,
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  ReactPortal,
} from "react";
import DateTimeDisplay from "./DateTimeDisplay";
import { format } from "@formkit/tempo";
import axios from "axios";
import Link from "next/link";

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

interface Props {
  id: string;
  rol: string;
}

const HomeDoctor = ({ id, rol }: Props) => {
  const date = new Date();

  const formatToday = format(date, "YYYY-MM-DD", "es");

  const [doctor, setDoctor] = useState<any>();
  const [infoDoctor, setInfoDoctor] = useState<any>();

  useEffect(() => {
    axios
      .get(`http://localhost:4700/appointments/getAppoDoc/${id}/:date`)
      .then((res) => setDoctor(res.data))
      .catch((err) => console.log(err));

    axios.get(`http://localhost:4700/doctors/ProfileDoc/${id}`)
    .then(res => setInfoDoctor(res.data))
    .catch(err => console.log(err) )
  }, []);

  console.log(infoDoctor);

  return (
    <div className="min-h-screen  bg-gray-100 flex flex-col items-center p-4 md:p-8">
      {/* Header */}
      <header className="flex items-center max-w-[350px] w-full justify-between mb-4">
        <div className="flex items-center w-[150px] space-x-4 border-b-2 gradient">
          
            <Image width={40} height={40} className="rounded-full" src={
              infoDoctor?.doctor.photo
                ? infoDoctor?.doctor.photo
                : "/usuario.png"
            } alt="Avatar" />
          <div className="flex flex-col p-0">
            <span className="font-semibold">{infoDoctor?.doctor.firstName} {infoDoctor?.doctor.lastName}</span>
            <span className="text-xs">{infoDoctor?.doctor.speciality}</span>
          </div>
        </div>
      </header>
      <div className="max-w-[300px] flex flex-col items-center">
        {/* Componente Fecha */}
        <DateTimeDisplay />
        <p className="font-semibold text-lg">Citas Programadas Para Hoy</p>

        <div className="z-10">
          {doctor ? (
            doctor?.doctorInfoDate.map(
              (appointment: {
                patient_id: any;
                video_call_link: string;
                startTime: string;
                reasons: string;
              }): any => (
                <article className="flex text-[12px] font-bold justify-between items-center h-[50px] gap-6">
                  <h3 className="self-start py-3">{appointment.startTime} hr</h3>
                  <ul className="flex flex-col text-[11px]">
                    <li>{appointment?.patient_id.firstName} {appointment?.patient_id.lastName}</li>
                    <li className="flex">
                      Cita: {appointment.reasons}
                    </li>
                  </ul>

                  <Link className="flex items-center gap-1" href={appointment?.video_call_link}>
                    <span>Ingresar</span>
                    <Image
                      src={"/HomeDoctor/video-camara.png"}
                      width={20}
                      height={12}
                      alt="video"
                      className="max-w-[20px] max-h-[12px]"
                    />
                  </Link>
                </article>
              )
            )
          ) : (
            <span className="text-xl">No tienes citas para el día de hoy</span>
          )}
        </div>
      </div>

      <Link href={`/${rol}/${id}`}  className="bg-[#812b75] px-4 py-2 text-[15px] text-[#F2F2F2] font-semibold border rounded-xl mt-10">
        Consultar Agenda
      </Link >
    </div>
  );
};

export default HomeDoctor;
