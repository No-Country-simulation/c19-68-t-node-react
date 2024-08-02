import React from 'react';
import { Manrope } from "next/font/google";

export const manrope = Manrope({
    subsets: ["latin"],
    display: "swap",
});
const ActivityUser = () => {
    const appointments = [
        {
            title: "Citas nutrición",
            hour: "15:30h",
            doctor: "Dra Nury Doe",
            date: "16 jul 2024",
        },
    ];
    return (
        <section className="w-[430px] h-[932px] m-auto">
            <div className="w-[375.83px] m-auto mt-10 font{}">
                <header className="w-[180px] mt-6 mb-20 h-[50px] flex items-end gap-2 gradient">
                    <img src="/my-activity/carbon_data-analytics.png" width={32} height={32} alt="logo" />
                    <h2 className="font-semibold text-[20px]">Mi Actividad</h2>
                </header>
                {/* Main Content */}
                <main >
                    <div className="w-[350px] m-auto ">
                        {/* Citas Programadas */}
                        <h2 className="text-[12px] mb-7">Citas programadas</h2>
                        <div className="flex justify-between items-center w-full mb-5">
                            <button className="w-[8.95px] h-[30.64px] -mt-5 text-[#35799F]">{'<'}</button>
                            <div className="w-[181px] h-[55px] bg-[#D3DDE1] rounded-[7px] p-2 flex flex-col justify-center mb-5">
                                {appointments.map((appointment, index) => (
                                    <article key={index} className="flex flex-col items-start">
                                        <div className="flex justify-between w-full">
                                            <span className='text-[12px]'>{appointment.title}</span>
                                            <span className='text-[12px]'>{appointment.date}</span>
                                        </div>
                                        <div className="flex justify-between w-full">
                                            <span className='text-[11px]'>{appointment.doctor}</span>
                                            <span className='text-[11px]'>{appointment.hour}</span>
                                        </div>
                                    </article>
                                ))}
                            </div>
                            <button className="w-[8.95px] h-[30.64px] -mt-5 text-[#35799F]">{'>'}</button>
                        </div>

                        {/* Tipos de citas */}
                        <h2 className="text-[12px] mb-6">Citas programadas</h2>
                        <div className="flex flex-wrap items-center gap-4 mb-6">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 flex items-center justify-center rounded-full border-4 border-[#03A41D]">
                                    <span>3</span>
                                </div>
                                <span className="text-[12px]">Primera cita</span>
                            </div>
                            <div className="flex items-center  ml-[50px] gap-2">
                                <div className="w-8 h-8 flex items-center justify-center rounded-full border-4 border-[#FF0000]">
                                    <span>1</span>
                                </div>
                                <span className="text-[12px]">Urgencia</span>
                            </div>
                            <div className="flex items-center -ml-[1px] gap-2">
                                <div className="w-8 h-8 flex items-center justify-center rounded-full border-4 border-[#FFD600]">
                                    <span>2</span>
                                </div>
                                <span className="text-[12px]">Citas Control</span>
                            </div>
                            <div className="flex items-center  ml-[44px] gap-2">
                                <div className="w-8 h-8 flex items-center justify-center rounded-full border-4 border-[#35799F]">
                                    <span>2</span>
                                </div>
                                <span className="text-[12px]">Procedimiento</span>
                            </div>
                        </div>

                        {/* Doctores Favoritos */}
                        <h2 className="text-[12px] mb-6">Doctores favoritos</h2>
                        <div className="w-full mb-8">
                            <div className="flex justify-between mt-2">
                                <button className="text-[#35799F]">{'<'}</button>
                                <div className="flex space-x-4">
                                    <div className="w-[136px] h-[55px] flex items-center bg-[#35799F] bg-opacity-[20%] rounded-lg p-2">
                                        <img src="/my-activity/Mask group1.png" alt="Doctor 1" className="w-[40px] h-[40px] rounded-full" />
                                        <div className="flex flex-col ml-2">
                                            <span className='text-[12px]'>Jane Smith</span>
                                            <span className='text-[10px] text-[#171717]'>Ortopedista</span>
                                            <span className='text-[8px]'>⭐ ⭐ ⭐ ⭐ ⭐</span>
                                        </div>
                                    </div>
                                    <div className="w-[136px] h-[55px] flex items-center bg-[#35799F] bg-opacity-[20%] rounded-lg p-2">
                                        <img src="/my-activity/Mask group.png" alt="Doctor 2" className="w-[40px] h-[40px] rounded-full" />
                                        <div className="flex flex-col ml-2">
                                            <span className='text-[12px]'>John Doe </span>
                                            <span className='text-[10px]'>Cardióloga</span>
                                            <span className='text-[8px]'>⭐ ⭐ ⭐ ⭐ ⭐</span>
                                        </div>
                                    </div>
                                </div>
                                <button className="text-[#35799F]">{'>'}</button>
                            </div>
                        </div>

                        {/* Tiempo Promedio en la Plataforma */}
                        <div className="w-full">
                            <h2 className="text-[12px]">Tiempo promedio en la plataforma</h2>
                            <div className="mt-2">
                                <img src="/my-activity/Reports.png" alt="Gráfico" className="w-full" />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </section>
    );
};

export default ActivityUser;
