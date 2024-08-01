import Input from "@/components/Input";
import { Manrope } from "next/font/google";

export const manrope = Manrope({
    subsets: ["latin"],
    display: "swap",
});

const ActivityDoctor = () => {
    const appointments = [
        {
            title: "Citas por Confirmar",
            hour: "09:30 hr",
            patient: "Juliana Medina",
            type: "1ra vez",
        },
        {
            hour: "10:30 hr",
            patient: "Juliana Medina",
            type: "1ra vez",
        },
        {
            hour: "11:00 hr",
            patient: "Juliana Medina",
            type: "1ra vez",
        },
    ];

    const newAppointments = [
        {
            title: "Citas Pendientes",
            hour: "08:00 hr",
            patient: "Juliana Medina",
            type: "Control",
        },
        {
            hour: "08:30 hr",
            patient: "Juliana Medina",
            type: "1ra vez",
        },
        {
            hour: "09:00 hr",
            patient: "Juliana Medina",
            type: "1ra vez",
        },
    ]
    return (
        <section className="w-screen h-screen">
            <div className="w-[375.83px] m-auto h-[100%]">
                <header className="w-[180px] mt-6 mb-20 h-[50px] flex items-end gap-2 gradient">
                    <img src="/my-activity/carbon_data-analytics.png" width={32} height={32} alt="logo" />
                    <h2 className="font-bold text-[20px]">Mi Actividad</h2>
                </header>
                <main className="w-[360px] m-auto">
                    <div className="text-[12.75px]">
                    <strong className="font-bold">Actividad:</strong> <span className="font-normal">Mensual</span>
                        <img className="w-[316.78px] h-[136px]" src="/my-activity/Chart.png" alt="actividad" />
                    </div>
                    <div className="w-[318px] rounded-[12.73px] bg-[#89BAD8] bg-opacity-[30%] p-4 mb-8"> 
                        {appointments.map((appointment, index) => (
                            <article key={index}>
                                <div className="text-[11.68px]">
                                    {index === 0 && (
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="font-bold text-[12.73px]">{appointment.title}</span>
                                            <a href="#" className="text-[12.73px]">Ver todo</a>
                                        </div>
                                    )}
                                    <div className="flex items-center text-[9.33px]">
                                        <span className="flex-shrink-0 w-20">{appointment.hour}</span>
                                        <div className="flex-grow flex items-center pl-2 border-b border-[#000000] pb-2 mb-2 border-gray-300">
                                            <span className="flex-grow">{appointment.patient}</span>
                                            <span className="flex-grow">Tipo de cita: {appointment.type}</span>
                                            <img className="w-[10.5px] h-[10.5px]" src="/my-activity/calendario-reloj.png" alt="calendario" />
                                            <img className="w-[10.5px] h-[10.5px] ml-2" src="/my-activity/x.png" alt="close" />
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                    
                    <div className="w-[318px] rounded-[12.73px] bg-[#89BAD8] bg-opacity-[30%] p-4">
                        {newAppointments.map((appointment, index) => (
                            <article key={index}>
                                <div className="text-[11.68px]">
                                    {index === 0 && (
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="font-bold text-[12.73px]">{appointment.title}</span>
                                            <a href="#" className="text-[12.73px]">Ver todo</a>
                                        </div>
                                    )}
                                    <div className="flex items-center text-[9.33px]">
                                        <span className="flex-shrink-0 w-20">{appointment.hour}</span>
                                        <div className="flex-grow flex items-center pl-2 border-b border-[#000000] pb-2 mb-2 border-gray-300">
                                            <span className="flex-grow">{appointment.patient}</span>
                                            <span className="flex-grow">Tipo de cita: {appointment.type}</span>
                                            <img className="w-[15.5px] h-[15.75px]" src="/my-activity/video-camara-alt 3.png" alt="video" />
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </main>
            </div>
        </section>
    );
};

export default ActivityDoctor;
