"use client";
import useSWR from "swr";
import { fetcher } from "@/utils/lib/fetcher"; // Asegúrate de que la ruta sea correcta

import CustomCalendar from "@/components/Agenda/customCalendar";
import DoctorDisponibility from "@/components/Agenda/doctorDisponibility";
import ProfRadioCard from "@/components/Agenda/ProfRadioCard";
import CustomSelect from "@/components/ui/customSelect";
import SectionTitle from "@/components/ui/sectionTitle";
import { useState, useEffect } from "react";

// Define el tipo para los doctores
interface Doctor {
  id: number | string;
  photo: string;
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  password: string;
  professionalCertificates: string[];
  speciality: string;
  phone: string;
  country: string;
  attentionSchedule: {
    day: string;
    startTime: string;
    endTime: string;
  }[];
}

const AgendarTurno = () => {
  const endpoint = "https://669e59d19a1bda36800656ad.mockapi.io/doctor";
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("");
  const [professionals, setProfessionals] = useState<Doctor[]>([]);
  const [selectedProfessional, setSelectedProfessional] = useState<number>(0);
  const [availableDates, setAvailableDates] = useState<Date[]>([
    new Date(2024, 6, 10), // 10th July 2024
    new Date(2024, 6, 15), // 15th July 2024
    new Date(2024, 6, 20), // 20th July 2024
  ]);

  const { data, error } = useSWR<Doctor[]>(endpoint, fetcher);

  // Transformar especialidades en formato de opciones
  const [specialityOptions, setSpecialityOptions] = useState<
    { label: string; value: string }[]
  >([]);

  useEffect(() => {
    if (data) {
      const uniqueSpecialties = Array.from(
        new Set(data.map((doctor) => doctor.speciality))
      );
      const options = uniqueSpecialties.map((specialty) => ({
        label: specialty.charAt(0).toUpperCase() + specialty.slice(1),
        value: specialty.toLowerCase().replace(/\s+/g, ""),
      }));
      setSpecialityOptions(options);
    }
  }, [data]);

  const handleSpecialtyChange = (value: string) => {
    setSelectedSpecialty(value);

    const filteredProfessionals =
      data?.filter(
        (doctor) =>
          doctor.speciality.toLowerCase().replace(/\s+/g, "") === value
      ) || [];

    setProfessionals(filteredProfessionals);
  };

  const handleProfessionalSelect = (value: number) => {
    // setSelectedProfessional(value);
    console.log("El profesional seleccionado para verificar fecha es:", value);
  };

  const handleDateSelect = (date: Date) => {
    console.log("Fecha seleccionada: ", date);
  };

  if (error) return <div>Error al cargar los datos.</div>;
  if (!data) return <div>Cargando...</div>;

  return (
    <section className="w-full h-screen bg-[#FFF] flex flex-col gap-3 p-12">
      <SectionTitle title={"Agenda"} />
      <div className="filtro-especialidad mb-4">
        <CustomSelect
          title="Especialidad"
          options={specialityOptions}
          onSelect={handleSpecialtyChange}
        />
      </div>
      <ProfRadioCard
        professionals={professionals}
        selectedProfessional={selectedProfessional}
        onProfessionalSelect={handleProfessionalSelect}
      />

      <CustomCalendar
        availableDates={availableDates}
        onDateSelect={handleDateSelect}
      />

      <DoctorDisponibility />

      <button className="w-full bg-[#812B75] text-white font-bold py-2 rounded-md shadow-md hover:bg-teal-600">
        Continuar
      </button>
    </section>
  );
};

export default AgendarTurno;
