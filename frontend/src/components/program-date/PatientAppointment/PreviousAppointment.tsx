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

const PreviousAppointment = ({ doctor }: Props) => {
  return (
    <article className="bg-[#89bad845] rounded-[11px] p-4 flex flex-col justify-between w-[320px] h-[120px]">
      <div className="flex gap-1">
        <Image
          src={doctor.photo}
          alt="doctor"
          className="rounded-full"
          width={40}
          height={40}
        />
        <ul className="text-[10px]">
          <li>
            <span className="text-[12px] font-semibold">
              {doctor.speciality}
            </span>
          </li>
          <li>{doctor?.speciality}</li>
          <li>⭐ ⭐ ⭐</li>
        </ul>
      </div>
      <ul className="flex justify-between text-[10px]">
        <li className="flex flex-col">
          <span>Diagnostico:</span>
        </li>
        <li className="flex flex-col">
          <span>Formulacion:</span>
        </li>
      </ul>
    </article>
  );
};

export default PreviousAppointment;
