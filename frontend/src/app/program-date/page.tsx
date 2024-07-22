import { Manrope } from "next/font/google";
import { format } from "@formkit/tempo";
import Scheduled from "@/components/Scheduled";
import Calendar from "@/components/Calendar";
import Image from "next/image";
import "./program-date.css";

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
      diagnostico: "Desgare inginal",
      formulacion: "Terapia fisica, naproxeno",
    },
  ];

  const date = new Date("2024-07-07");

  const day = format(date, "dddd, MMMM D, YYYY", 'es');

  const calendar = day.replaceAll(',', ' ').split(" ");

  return (
    <section className={`w-screen h-screen bg-[#FAFAFA]`}>
      <div className="w-[78%] h-[90%] max-w-[331px] items-center m-auto mt-5 flex flex-col gap-[25px]">
        <header className="gradient self-start w-[230px] h-[50px] flex items-end ">
          <div className="flex items-center gap-2 mx-auto">
            <Image src={"/logo.png"} alt="arrow up" width={23} height={19} />
            <h2 className="text-[20px] font-bold">Citas Programadas</h2>
          </div>
        </header>

        {appointment.map((appointment) => (
          <article className=" grid grid-cols-2">
            <div className="text-[11.68px] grid items-end grid-rows-2">
              <ul className="">
                <li>
                  <span className="text-[15.58px] font-bold">
                    {appointment.title}
                  </span>
                </li>
                <li>{appointment.doctor}</li>
                <li>La cita el día de hoy es a las {appointment.hour}hr</li>
              </ul>
              <button className="my-auto w-[141px] h-[34px] bg-[#35799F] text-[#F2F2F2] rounded-[12.17px] font-medium">
                Ingresar
              </button>
            </div>

<<<<<<< HEAD
            <Calendar calendar={calendar} />
=======
            <Calendar
              twClass="justify-self-end"
              sizeCalendar="w-[91px] h-[91px] text-[40px]"
              calendar={calendar}
            sizeDate="text-[13px]"
            sizeDay="text-[35px]"
            sizeMonthAndYear=" text-[13px]"
            />
>>>>>>> 2b2b8ac9b99315814641e93cbe0347d12dab0500
          </article>
        ))}

        <div className="flex flex-col gap-[29px]">
          {newAppointment.map((appointment) => (
            <Scheduled appointment={appointment} calendar={calendar} />
          ))}
        </div>

        <div className="flex self-start justify-center rounded-[12.17px] items-center gap-2 w-[142px] h-[35px] bg-[#35799F] text-[#F2F2F2]">
          <Image
            src={"/calendar-scheduled.png"}
            alt="arrow up"
            width={35}
            height={35}
            className="w-[13px] h-[13px] "
          />

          <p className="font-medium text-[15px]">Agendar Cita</p>
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
              <Image
                src={"/arcticons_maps.png"}
                alt="arrow up"
                width={33}
                height={33}
              />
              <span className="font-semibold text-[12px]">Ver consultorio</span>
            </div>
          </article>
        ))}

        <h2 className="text-[15.58px] font-bold text-center">
          Ultimas consultas
        </h2>

        <div>
          {doctors.map((doctor) => (
<<<<<<< HEAD
            <article className="bg-[#89BAD8] rounded-[11px] px-5 py-2 flex flex-col justify-between w-[331.03px] h-[90px]">
=======
            <article className="bg-[#89bad845] rounded-[11px] px-5 py-2 flex flex-col justify-between w-[320px] h-[120px]">
>>>>>>> 2b2b8ac9b99315814641e93cbe0347d12dab0500
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
<<<<<<< HEAD
                <li className="flex flex-col"><span>Diagnostico:</span> {doctor.diagnostico}</li>
                <li className="flex flex-col"><span>Formulacion:</span> {doctor.formulacion}</li>
              </ul>

=======
                <li className="flex flex-col">
                  <span>Diagnostico:</span> {doctor.diagnostico}
                </li>
                <li className="flex flex-col">
                  <span>Formulacion:</span> {doctor.formulacion}
                </li>
              </ul>
>>>>>>> 2b2b8ac9b99315814641e93cbe0347d12dab0500
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
