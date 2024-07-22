import { Manrope } from "next/font/google";
import { format } from "@formkit/tempo";
import { useState } from "react";
import Scheduled from "@/components/Scheduled";
import Calendar from "@/components/Calendar";

export const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
});

const page = () => {
  const appointment = [
    {
      title: "Cita Nutrición",
      doctor: "Dra. Johana Doe",
      date: "2024-07-07",
      hour: 15,
    },
  ];

  const newAppointment = [
    {
      title: "Cita Ortopeida",
      doctor: "Dr. NN Doe",
      date: "07-07-2024",
      hour: 11,
    },
    {
      title: "Cita Ginecologo",
      doctor: "Dra. Martinez",
      date: "07-07-2024",
      hour: 11,
    },
  ];

  const doctors = [
    {
      name: "Julian",
      alias: "Internista",
      diagnostico: 'Desgare inginal',
      formulacion: 'Terapia fisica, naproxeno'
    },
  ];

  const date = new Date("2024-07-07");

  const day = format(date, "D MMMM YYYY");

  const calendar = day.split(" ");

  return (
    <section className={`w-screen h-screen`}>
      <div className="w-[78%] max-w-[331px] items-center h-[90%] m-auto mt-5 flex flex-col gap-[30px]">
        <h2 className="text-[31.16px] text-center font-bold">
          Citas Programadas
        </h2>

        {appointment.map((appointment) => (
          <article className=" grid grid-cols-2">
            <div className="text-[11.68px] grid grid-rows-2">
              <ul className="">
                <li>
                  <span className="text-[15.58px] font-bold">
                    {appointment.title}
                  </span>
                </li>
                <li>{appointment.doctor}</li>
                <li>La cita el día de hoy es a las {appointment.hour}hr</li>
              </ul>
              <button className="m-auto w-[88.6px] h-[25.8px] bg-[#D9D9D9] rounded-[12.17px]">
                Ingresar
              </button>
            </div>

            <Calendar calendar={calendar} />
          </article>
        ))}

        <div className="flex flex-col gap-[29px]">
          {newAppointment.map((appointment) => (
            <Scheduled appointment={appointment} calendar={calendar} />
          ))}
        </div>

        <div className="flex self-start justify-center rounded-[12.17px] items-center gap-2 w-[118.05px] h-[34.56px] bg-[#D9D9D9]">
          <img
            className="w-[17.53px] h-[17.77px]"
            src="https://cdn.icon-icons.com/icons2/3869/PNG/512/calendar_icon_243178.png"
            alt=""
          />
          <p className="font-bold text-[11.68px]">Agendar Cita</p>
        </div>

        <h2 className="text-center font-bold text-[15.58px]">
          Doctores cerca de ti
        </h2>
        {doctors.map((doctor) => (
          <article className=" flex justify-between w-[331.03px] h-[45px]">
            <div className="flex">
              <img
                className="w-[40px] h-[40px] mr-3"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR81iX4Mo49Z3oCPSx-GtgiMAkdDop2uVmVvw&s"
                alt=""
              />
              <ul className="text-[10px]">
                <li>
                  <span className="text-[12px] font-semibold">
                    {doctor.name}
                  </span>
                </li>
                <li>{doctor.alias}</li>
                <li>⭐ ⭐ ⭐</li>
              </ul>
            </div>

            <div className="flex flex-col items-center">
              <img
                className="w-[33px] h-[33px]"
                src="https://cdn.icon-icons.com/icons2/317/PNG/512/map-map-marker-icon_34394.png"
                alt=""
              />
              <span className="font-semibold text-[12px]">Ver consultorio</span>
            </div>
          </article>
        ))}

        <h2 className="text-[15.58px] font-bold text-center">Ultimas consultas</h2>

        <div>
          {doctors.map((doctor) => (
            <article className="bg-[#89BAD8] rounded-[11px] px-5 py-2 flex flex-col justify-between w-[331.03px] h-[90px]">
              <div className="flex">
                <img
                  className="w-[40px] h-[40px] mr-3"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR81iX4Mo49Z3oCPSx-GtgiMAkdDop2uVmVvw&s"
                  alt=""
                />
                <ul className="text-[10px]">
                  <li>
                    <span className="text-[12px] font-semibold">
                      {doctor.name}
                    </span>
                  </li>
                  <li>{doctor.alias}</li>
                  <li>⭐ ⭐ ⭐</li>
                </ul>
              </div>
              <ul className="flex justify-between text-[10px]">
                <li className="flex flex-col"><span>Diagnostico:</span> {doctor.diagnostico}</li>
                <li className="flex flex-col"><span>Formulacion:</span> {doctor.formulacion}</li>
              </ul>

            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
