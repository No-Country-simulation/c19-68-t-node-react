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
        <section className="w-screen h-screen z-20">
            <div className="min-h-screen h-full bg-gray-100 flex flex-col p-4">
                <header className="flex items-center justify-between mb-5 relative w-full mt-10">
                    <div className="flex items-center space-x-4 w-[180px] h-[44px] ml-[42px] -mt-2 gradient">
                        <div className="w-10 h-10 -mt-2 bg-[#89BAD8] rounded-full flex items-center justify-center">
                            <Image src="/home/lets-icons_user-light.png" alt="Avatar" width={24} height={24} />
                        </div>
                        <span className="font-semibold text[20px] -mt-2">Pepito Perez</span>
                    </div>
                    <div className="absolute top-0 right-0 p-2 ">
                        <Image src="/logo.png" alt="Logo" width={24} height={24} />
                    </div>
                </header>
                <main>
                    {/* Image Slider */}
                    <div className="relative w-full h-40 md:h-60 lg:h-80 mb-15 bg-gray-300">
                        <Image src="/home/Frame 2388.png" alt="" layout="fill" objectFit="cover" className="absolute inset-0 z-10" />
                        <div className="absolute inset-0 bg-white z-0"></div>
                    </div>

                    {/* Appointment Section */}
                    <div className="w-full grid grid-cols-2 p-10 mb-3">
                        <div className="font-family: Manrope_da1155">
                            <span className="mb-3 block font-semibold">No hay citas programadas para el día de hoy</span>
                            <div className="flex items-center gap-1 text-[#F2F2F2] text-[15px]">
                                <button className="w-[142px] h-[35px] bg-[#35799F] rounded-[12.17px] flex items-center justify-center gap-1">
                                    <Image src="/home/calendar.png" alt="calendario" width={15} height={15} />
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
                            sizeMonthAndYear="text-[13px]"
                        />
                    </div>
                    {/* Recent Consultations */}
                    <h2 className="font-bold text-center text-[15.58px] mb-4">Últimas consultas</h2>
                    <div className="flex flex-col items-center mb-4">
                        {doctors.map((doctor, index) => (
                            <article key={index} className="w-[320px] h-[120px] bg-[#35799F] p-5 mb-3 rounded-[11px] shadow bg-opacity-[20%]">
                                <div className="flex">
                                    <Image className="rounded-full" src="/home/fotos-H9lg5Noj660-unsplash 1.png" alt="foto" width={40} height={40} />
                                    <ul className="text-[10px] ml-4">
                                        <li>
                                            <span className="text-[12px] font-semibold">
                                                {doctor.name}
                                            </span>
                                        </li>
                                        <li>{doctor.alias}</li>
                                        <li>⭐ ⭐ ⭐</li>
                                    </ul>
                                </div>
                                <ul className="flex justify-between text-[10px] mt-4">
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
                    <h2 className="font-semibold text-[15.58px] -mb-4 text-center">Noti-salud</h2>
                    <div className="w-full p-4 mb-4 ">
                        <div className="grid grid-cols-3 gap-4 relative p-4 ">
                            <div className="relative">
                                <Image className="rounded-[11px,11px,0,0]object-cover" src="/home/jesse-orrico-rmWtVQN5RzU-unsplash 1.png" alt="Notification 1" width={97} height={250} />
                                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-white opacity-100"></div>
                            </div>
                            <div className="relative">
                                <Image className="rounded-[11px,11px,0,0] object-cover" src="/home/alison-marras-LI368L2RZno-unsplash 1.png" alt="Notification 2" width={97} height={150} />
                                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-white opacity-100"></div>
                            </div>
                            <div className="relative">
                                <Image className="rounded-[11px,11px,0,0] object-cover" src="/home/nguy-n-hi-p-2rNHliX6XHk-unsplash 1.png" alt="Notification 3" width={97} height={150} />
                                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-white opacity-100"></div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </section>
    );
};

export default HomePage;
