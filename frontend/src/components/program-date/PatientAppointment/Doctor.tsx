import Image from "next/image";

interface Props {
  doctor: Doctor;
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
  attentionSchedule: [AttentionSchedule, AttentionSchedule];
}

interface AttentionSchedule {
  day: string;
  startTime: string;
  endTime: string;
}

const Doctor = ({ doctor }: Props) => {
  
    return (
    <article className=" flex justify-between w-[331.03px] h-[45px]">
      <div className="flex gap-1">
          <Image src={doctor.photo} width={40} height={40} alt="doctor" className="rounded-full"/>
        <ul className="text-[10px]">
          <li>
            <span className="text-[12px] font-semibold">
            { doctor.gender == 'male' ? 'Dr.' : 'Dra.'} {doctor.firstName} {doctor.lastName}
            </span>
          </li>
          <li>{doctor.speciality}</li>
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
  );
};

export default Doctor;
