"use client";
import useSWR from "swr";
import { fetcher } from "@/utils/lib/fetcher"; // Asegúrate de que la ruta sea correcta
import CustomCalendar from "@/components/Agenda/customCalendar";
import DoctorDisponibility from "@/components/Agenda/doctorDisponibility";
import ProfRadioCard from "@/components/Agenda/ProfRadioCard";
import CustomSelect from "@/components/ui/customSelect";
import SectionTitle from "@/components/ui/sectionTitle";
import { useState, useEffect } from "react";
import { dateFormater } from "@/utils/lib/helpers";
import { useFormState } from "react-dom";
import { appointmentRegister } from "@/app/[rol]/[id]/agendar-turnos/actions";
import { set } from "date-fns";

export interface Doctor {
  _id: string | number;
  photo: string;
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  professionalCertificates: string[];
  speciality: string;
  phone: string;
  country: string;
  availability: {
    daysOfWeek: string[];
    timeSlots: {
      morningSlot: {
        start: string;
        end: string;
      };
      afternoonSlot: {
        start: string;
        end: string;
      };
    };
  };
  confirmationString: string;
  confirmed: boolean;
  availabilityStatus: string;
}

const AgendarTurno = () => {
  const [state, formAction] = useFormState<any, FormData>(
    appointmentRegister,
    undefined
  );
  console.log("Lo que trae state: ", state);

  const endpoint = `http://localhost:4700/doctors/getAllDoc`;
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("");
  const [professionals, setProfessionals] = useState<Doctor[]>([]);
  const [selectedProfessional, setSelectedProfessional] = useState<Doctor>();
  const [availableDates, setAvailableDates] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [specialityOptions, setSpecialityOptions] = useState<
    { label: string; value: string }[]
  >([]);

  const { data, error } = useSWR(endpoint, fetcher);

  useEffect(() => {
    if (data) {
      const uniqueSpecialties = Array.from(
        new Set(
          data?.doctors.map((doctor: { speciality: any }) => doctor.speciality)
        )
      );
      const options = uniqueSpecialties.map((speciality) => ({
        label: speciality.charAt(0).toUpperCase() + speciality.slice(1),
        value: speciality.toLowerCase().replace(/\s+/g, ""),
      }));
      setSpecialityOptions(options);
    }
  }, [data]);

  const handleSpecialtyChange = (value: string) => {
    setSelectedSpecialty(value);
    const filteredProfessionals =
      data?.doctors.filter(
        (doctor: { speciality: string }) =>
          doctor.speciality.toLowerCase().replace(/\s+/g, "") === value
      ) || [];
    setProfessionals(filteredProfessionals);
  };

  const handleProfessionalSelect = (value: string | number) => {
    const profSelect =
      data?.doctors.filter(
        (doc: { _id: string | number }) => doc._id === value
      ) || [];

    // Convendria hacer un fetch a la API para hacer funciones de disponibilidad de dias y horarios
    const disponibilidad = profSelect?.[0]?.availability || [];

    console.log("Disponibilidad del profesional: ", disponibilidad.daysOfWeek);

    setAvailableDates(disponibilidad.daysOfWeek);

    setSelectedProfessional(profSelect[0]);
  };

  console.log(
    "Profesional seleccionado con datos completos: ",
    selectedProfessional
  );

  const handleDateSelect = (date: Date) => {
    console.log("Fecha seleccionada: ", date);
    console.log(typeof date);

    setSelectedDate(date);
  };

  if (error) return <div>Error al cargar los datos.</div>;
  if (!data) return <div>Cargando...</div>;

  return (
    <section className="w-full h-full bg-[#FFF] flex flex-col gap-3 p-12">
      <SectionTitle title={"Agenda"} />

      {/* <div className="flex-1 overflow-auto">
        <pre className="bg-gray-100 p-4 rounded-lg">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div> */}

      <form action={formAction}>
        <div className="filtro-especialidad mb-4">
          <CustomSelect
            name="speciality"
            title="Especialidad"
            options={specialityOptions}
            onSelect={handleSpecialtyChange}
          />
        </div>
        <ProfRadioCard
          professionals={professionals}
          selectedProfessional={selectedProfessional?._id}
          onProfessionalSelect={handleProfessionalSelect}
        />
        <CustomCalendar
          // startDate={new Date()}
          onDateSelect={handleDateSelect}
          name="selectedDate"
          availableDays={availableDates}
        />
        <input
          type="hidden"
          name="selectedDate"
          value={selectedDate ? selectedDate.toISOString() : ""}
        />
        <DoctorDisponibility
          day={selectedDate}
          doctorId={selectedProfessional?._id}
        />
        <button
          type="submit"
          className="w-full bg-[#812B75] text-white font-bold py-2 rounded-md shadow-md hover:bg-teal-600"
        >
          Continuar
        </button>
      </form>
    </section>
  );
};

export default AgendarTurno;
