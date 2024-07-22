"use client";

import DoctorDisponibility from "@/components/Agenda/doctorDisponibility";
import ProfRadioCard from "@/components/Agenda/ProfRadioCard";
import CustomSelect from "@/components/ui/customSelect";
import SectionTitle from "@/components/ui/sectionTitle";
import { useState } from "react";

const AgendarTurno = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("");
  const [professionals, setProfessionals] = useState<any[]>([]);
  const [selectedProfessional, setSelectedProfessional] = useState<string>("");

  const optionEx = [
    {
      label: "Cardiologia",
      value: "cardiologia",
    },
    {
      label: "Radiologia",
      value: "radiologia",
    },
  ];

  const handleSpecialtyChange = (value: string) => {
    setSelectedSpecialty(value);

    const updatedProfessionals = [
      {
        name: "Dr. Juan Pérez",
        rating: 5,
        specialty: "cardiologia",
        imageUrl: "/path/to/image1.jpg", // Reemplaza con la URL real de la imagen
      },
      {
        name: "Dra. María López",
        rating: 4,
        specialty: "radiologia",
        imageUrl: "/path/to/image2.jpg", // Reemplaza con la URL real de la imagen
      },
      {
        name: "Dr. Carlos García",
        rating: 5,
        specialty: "cardiologia",
        imageUrl: "/path/to/image3.jpg", // Reemplaza con la URL real de la imagen
      },
    ];

    const filteredProfessionals = updatedProfessionals.filter(
      (prof) => prof.specialty === value
    );

    setProfessionals(filteredProfessionals);
  };

  const handleProfessionalSelect = (value: string) => {
    setSelectedProfessional(value);
    console.log("El profesional seleccionado para verificar fecha es:", value);
  };

  return (
    <section className="w-full h-screen bg-[#FFF] flex flex-col gap-3 p-12">
      <SectionTitle title={"Agenda"} />
      <div className="filtro-especialidad mb-4">
        <CustomSelect
          title="Especialidad"
          options={optionEx}
          onSelect={handleSpecialtyChange}
        />
      </div>
      <ProfRadioCard
        professionals={professionals}
        selectedProfessional={selectedProfessional}
        onProfessionalSelect={handleProfessionalSelect}
      />

      <DoctorDisponibility />

      {/* <div className="fechas-disponibles mb-4">
        <h2 className="text-xl font-semibold mb-2">Fechas disponibles</h2>
        <div className="grid grid-cols-7 gap-1">
          {[...Array(31)].map((_, i) => (
            <div
              key={i}
              className="bg-gray-300 w-8 h-8 flex items-center justify-center"
            >
              {i + 1}
            </div>
          ))}
        </div>
      </div>
      <div className="horarios-disponibles mb-4">
        <h2 className="text-xl font-semibold mb-2">Horarios disponibles</h2>
        <select className="w-full border-2 border-gray-300 rounded-md shadow-inner focus:outline-none focus:border-teal-500 p-2">
          <option value="08:00">08:00</option>
          <option value="09:00">09:00</option>
          <option value="10:00">10:00</option>
          <option value="11:00">11:00</option>
        </select>
      </div>
      <div className="crear-recordatorio mb-4">
        <h2 className="text-xl font-semibold mb-2">Crear recordatorio</h2>
        <select className="w-full border-2 border-gray-300 rounded-md shadow-inner focus:outline-none focus:border-teal-500 p-2">
          <option value="5min">5 minutos antes</option>
          <option value="10min">10 minutos antes</option>
          <option value="15min">15 minutos antes</option>
        </select>
      </div>
      <button className="w-full bg-teal-500 text-white font-bold py-2 rounded-md shadow-md hover:bg-teal-600">
        Programar cita
      </button> */}
    </section>
  );
};

export default AgendarTurno;
