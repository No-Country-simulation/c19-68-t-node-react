import React from 'react';
import { Manrope } from "next/font/google";

export const manrope = Manrope({
    subsets: ["latin"],
    display: "swap",
});
const MiActividadUser = () => {
    const appointments = [
        {
            title: "Citas nutrición",
            hour: "15:30h",
            doctor: "Dra Nury Doe",
            date: "16 jul 2024",
        },
    ];
    return (
        <section className="w-screen h-scree">
            <div className="w-[375.83px] m-auto h-[100%]">
                <header className="w-[180px] mt-6 mb-20 h-[50px] flex items-end gap-2 gradient">
                    <img src="/my-activity/carbon_data-analytics.png" width={32} height={32} alt="logo" />
                    <h2 className="font-bold text-[20px]">Mi Actividad</h2>
                </header>
                {/* Main Content */}
                <main >
                    <div className="w-[360px] m-auto ">
                        {/* Citas Programadas */}
                        <h2 className="text-[12px] mb-6">Citas programadas</h2>
                        <div className="flex justify-between items-center w-full">
                            <button className="w-[8.95px] h-[15.64px] text-[#35799F]">{'<'}</button>
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
                            <button className="text-blue-500">{'>'}</button>
                        </div>

                        {/* Tipos de citas */}
                        <div className="w-full mb-4">
                            <h2 className="font-semibold">Tipos de citas</h2>
                            <div className="flex justify-between mt-2">
                                <div className="flex flex-col items-center">
                                    <img src="primera-cita.png" alt="Primera cita" className="w-8 h-8 mb-1" />
                                    <span>Primera cita</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <img src="cita-control.png" alt="Cita control" className="w-8 h-8 mb-1" />
                                    <span>Cita Control</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <img src="urgencia.png" alt="Urgencia" className="w-8 h-8 mb-1" />
                                    <span>Urgencia</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <img src="procedimiento.png" alt="Procedimiento" className="w-8 h-8 mb-1" />
                                    <span>Procedimiento</span>
                                </div>
                            </div>
                        </div>

                        {/* Doctores Favoritos */}
                        <div className="w-full mb-4">
                            <h2 className="font-semibold">Doctores favoritos</h2>
                            <div className="flex justify-between mt-2">
                                <button className="text-[#35799F]">{'<'}</button>
                                <div className="flex space-x-4">
                                    <div className="flex flex-col items-center">
                                        <img src="doctor1.png" alt="Doctor 1" className="w-12 h-12 rounded-full mb-1" />
                                        <span>John Doe</span>
                                        <span>Ortopedista</span>
                                        <span>★★★★☆</span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <img src="doctor2.png" alt="Doctor 2" className="w-12 h-12 rounded-full mb-1" />
                                        <span>Jane Smith</span>
                                        <span>Cardióloga</span>
                                        <span>★★★★★</span>
                                    </div>
                                </div>
                                <button className="text-[#35799F]">{'>'}</button>
                            </div>
                        </div>

                        {/* Tiempo Promedio en la Plataforma */}
                        <div className="w-full">
                            <h2 className="font-semibold">Tiempo promedio en la plataforma</h2>
                            <div className="mt-2">
                                <img src="grafico.png" alt="Gráfico" className="w-full" />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </section>
    );
};

export default MiActividadUser;
