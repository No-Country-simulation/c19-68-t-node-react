"use client";
import { Manrope } from "next/font/google";
import Scheduled from "@/components/Scheduled";
import Image from "next/image";
import { useEffect } from "react";
import useFetch from "@/hooks/useFetch";
import { useRouter } from "next/navigation";
import PrincipalAppointment from "./PrincipalAppointment";
import Doctor from "./Doctor";
import PreviousAppointment from "./PreviousAppointment";

export const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
});

interface Props {
  id: string;
}

const PatientAppointment = ({ id }: Props) => {
  const [citas, getCitas] = useFetch();
  const [doctors, getDoctors] = useFetch();

  const principalAppointment = citas?.patientDate.slice(0, 1);
  const limitDoctors = doctors?.slice(0, 3);
  const previousAppointments = doctors?.slice(0, 1);

  const router = useRouter();

  useEffect(() => {
    getCitas(
      `https://e-medicine-backend.vercel.app/appointments/getAllAppo/${id}/pending`
    );
    getDoctors("https://669e59d19a1bda36800656ad.mockapi.io/doctor");
  }, []);

  const handleClick = () => {
    router.push(`/paciente/${id}/agendar-turnos`);
  };

  return (
    <section className={`w-screen h-full bg-[#FAFAFA]`}>
      <div className="w-full h-full max-w-[331px] items-center m-auto py-5 flex flex-col gap-[25px]">
        <header className="gradient self-start w-[230px] h-[50px] flex items-end ">
          <div className="flex items-center gap-2 mx-auto">
            <Image src={"/logo.png"} alt="arrow up" width={23} height={19} />
            <h2 className="text-[20px] font-bold">Citas Programadas</h2>
          </div>
        </header>

        <>
          {principalAppointment?.map((appointment: any) => (
            <PrincipalAppointment
              key={appointment._id}
              appointment={appointment}
            />
          ))}
        </>

        <div className="flex flex-col gap-[29px]">
          {citas?.patientDate.map((citas: any) => (
            <Scheduled key={citas.id} appointment={citas} />
          ))}
        </div>

        <div
          onClick={handleClick}
          className="flex cursor-pointer self-start justify-center rounded-[12.17px] items-center gap-2 w-[142px] h-[35px] bg-[#35799F] text-[#F2F2F2]"
        >
          <Image
            src={"/calendar-scheduled.png"}
            alt="arrow up"
            width={35}
            height={35}
            className="w-[13px] h-[13px] "
          />

          <p className="font-medium text-[15px] ">Agendar Cita</p>
        </div>

        <h2 className="text-center font-bold text-[15.58px]">
          Doctores cerca de ti
        </h2>
        {limitDoctors?.map((doctor: any) => (
          <Doctor doctor={doctor} key={doctor._id} />
        ))}

        <h2 className="text-[15.58px] font-bold text-center">
          Ultimas consultas
        </h2>

        <div>
          {previousAppointments?.map((doctor: any) => (
            <PreviousAppointment key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default PatientAppointment;
