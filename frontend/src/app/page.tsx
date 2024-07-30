<<<<<<< HEAD
import Image from 'next/image';
import { format } from "@formkit/tempo";
import { Manrope } from "next/font/google";
import Calendar from "@/components/Calendar";

export const manrope = Manrope({
    subsets: ["latin"],
    display: "swap",
});

const HomePage = () => {
    const date = new Date("2024-07-07");

    const day = format(date, "dddd, MMMM D, YYYY", 'es');

    const calendar = day.replaceAll(',', ' ').split(" ");

    const doctors = [
        {
            name: "Julian",
            alias: "Internista",
            diagnostico: "Desgare inginal",
            formulacion: "Terapia fisica, naproxeno",
        },
    ];
    return (
        <section className="w-screen h-screen">
            <div className="min-h-screen h-full bg-gray-100 flex flex-col p-4">
                <header className="flex items-center justify-between mb-5  relative w-full">
                    <div className="flex items-center space-x-4 w-[180px] gradient">
                        <div className="w-10 h-10 bg-[#89BAD8] rounded-full flex items-center justify-center">
                            <Image className="w-6 h-6" src="/home/lets-icons_user-light.png" alt="Avatar" width={24} height={24} />
                        </div>
                        <span className="font-semibold">Pepito Perez</span>
                    </div>
                    <div className="absolute top-0 right-0 p-2">
                        <img className="w-6 h-6" src="/logo.png" alt="Logo" />
                    </div>
                </header>
                <main>
                    {/* Image Slider */}
                    <div className="w-full bg-gray-300 h-40 md:h-60 lg:h-80 mb-4 ">
                        <img className='w-[430px] h-[170px] bg-gray-300 h-40 md:h-60 lg:h-80 mb-4 ' src="/home/Frame 2388.png" alt="" />
                    </div>

                    {/* Appointment Section */}
                    <div className="w-full grid grid-cols-2 p-10 mb-3">
                        <div className='font-family: Manrope_da1155'>
                            <span className="mb-3 block font-semibold">No hay citas programadas para el día de hoy</span>
                            <div className="flex items-center gap-1  text-[#F2F2F2] text-[15px]">
                                <button className="w-[142px] h-[35px] bg-[#35799F] rounded-[12.17px] flex items-center justify-center gap-1">
                                    <img className="w-[15px] h-[15px]" src="/home/calendar.png" alt="calendario" />
                                    Agendar cita
                                </button>
                            </div>
                        </div>
                        <Calendar
                            twClass="justify-self-end"
                            sizeCalendar="w-[91px] h-[91px] text-[40px]"
                            calendar={calendar}
                            sizeDate="text-[13px]"
                            sizeDay="text-[35px]"
                            sizeMonthAndYear=" text-[13px]"
                        />
                    </div>
                    {/* Recent Consultations */}
                    <h2 className="font-bold text-center text-[15.58px] mb-4">Últimas consultas</h2>
                    <div className="flex flex-col items-center mb-4">  {/* Contenedor centrado */}
                        {doctors.map((doctor, index) => (
                            <article key={index} className="w-[320px] h-[120px] bg-[#35799F] p-5 mb-3 rounded-[11px] shadow bg-opacity-[20%]">
                                <div className='flex'>
                                    <img className="w-[40px] h-[40px] rounded-full" src="/home/fotos-H9lg5Noj660-unsplash 1.png" alt="foto" />
                                    <ul className="text-[10px] ml-4">  {/* Agregando margen a la izquierda */}
                                        <li>
                                            <span className="text-[12px] font-semibold">
                                                {doctor.name}
                                            </span>
                                        </li>
                                        <li>{doctor.alias}</li>
                                        <li>⭐ ⭐ ⭐</li>
                                    </ul>
                                </div>
                                <ul className="flex justify-between text-[10px] mt-4">  {/* Agregando margen arriba */}
                                    <li className="flex flex-col">
                                        <span>Diagnostico:</span> {doctor.diagnostico}
                                    </li>
                                    <li className="flex flex-col">
                                        <span>Formulacion:</span> {doctor.formulacion}
                                    </li>
                                </ul>
                            </article>
                        ))}
                    </div>


                    {/* Health Notifications */}
                    <h2 className="font-semibold text-[15.58px] mb-2 text-center">Noti-salud</h2>
                    <div className="w-full  p-4 mb-4 rounded-lg shadow">
                        <div className="grid grid-cols-3 gap-4">
                            <img className="w-[94px] h-[95px] rounded-lg object-cover" src="/home/jesse-orrico-rmWtVQN5RzU-unsplash 1.png" alt="Notification 1" />
                            <img className="w-[94px] h-[95px]rounded-lg object-cover" src="/home/alison-marras-LI368L2RZno-unsplash 1.png" alt="Notification 2" />
                            <img className="w-[94px] h-[95px] rounded-lg object-cover" src="/home/nguy-n-hi-p-2rNHliX6XHk-unsplash 1.png" alt="Notification 3" />
                        </div>
                    </div>
                </main>
            </div>
        </section >
    );
=======
"use client";

import { useState } from "react";
import First from "@/components/onboarding/First";
import Secound from "@/components/onboarding/Secound";
import Finaly from "@/components/onboarding/Finaly";
import { useRouter } from "next/navigation";
import Header from "@/components/onboarding/Header";

const page = () => {
  const [counter, setCounter] = useState<number>(1);

  const router = useRouter();
  const handleClick = () => {
    setCounter(counter + 1);

    if (counter >= 3) {
      router.push("/auth/login");
    }
  };

  return (
    <section className="h-screen w-screen bg-[#FAFAFA]">
      <div className="h-[90%] w-full flex flex-col items-center">
        <Header />

        <div>
          {counter == 1 ? (
            <First />
          ) : counter == 2 ? (
            <Secound />
          ) : counter >= 3 ? (
            <Finaly />
          ) : (
            counter
          )}
        </div>

        <button
          className="w-[205px] h-[43px] bg-[#35799F] rounded-[14px] text-[#F2F2F2] font-bold"
          onClick={handleClick}
        >
          Continuar
        </button>
      </div>
    </section>
  );
>>>>>>> e48fee99b803055fe7fbac677607b30a2bf89ac7
};

export default page;
