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

interface Doctor {
  _id: string | number;
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
  availability: [endDate: string, startDate: string];
}

const AgendarTurno = () => {
  const endpoint = "http://localhost:4700/doctors/getAllDoc";
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("");
  const [professionals, setProfessionals] = useState<Doctor[]>([]);
  const [selectedProfessional, setSelectedProfessional] = useState<Doctor>();
  const [availableDates, setAvailableDates] = useState<Date[]>([
    // new Date(2024, 6, 10), // 10th July 2024
    // new Date(2024, 6, 15), // 15th July 2024
    // new Date(2024, 6, 20), // 20th July 2024
  ]);

  const { data, error } = useSWR<{ doctors: Doctor[] }>(endpoint, fetcher);

  const [specialityOptions, setSpecialityOptions] = useState<
    { label: string; value: string }[]
  >([]);

  useEffect(() => {
    if (data) {
      const uniqueSpecialties = Array.from(
        new Set(data?.doctors.map((doctor) => doctor.speciality))
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
        (doctor) =>
          doctor.speciality.toLowerCase().replace(/\s+/g, "") === value
      ) || [];
    setProfessionals(filteredProfessionals);
  };

  const handleProfessionalSelect = (value: string | number) => {
    const profSelect = data?.doctors.filter((doc) => doc._id === value);
    const disponibilidad = profSelect[0].availability;

    const startEndDates = dateFormater(
      disponibilidad[0].startDate,
      disponibilidad[0].endDate
    );

    setAvailableDates(startEndDates);

    setSelectedProfessional(profSelect[0]);
  };

  console.log(
    "Profesional seleccionado con datos completos: ",
    selectedProfessional
  );

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
        selectedProfessional={selectedProfessional?._id}
        onProfessionalSelect={handleProfessionalSelect}
      />
      <CustomCalendar
        startDate={availableDates[0]}
        endDate={availableDates[1]}
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
