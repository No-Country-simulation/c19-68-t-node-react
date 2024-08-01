"use client";

import Input from "@/components/Input";
import SectionTitle from "@/components/ui/sectionTitle";
import Image from "next/image";
import { useFormState } from "react-dom";
import { patientCompleteData } from "./actions";
import React from "react";

const DataCompletionPatient = (id: any) => {
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const target = event.target as HTMLFormElement;
    const formData = {
      dateOfBirth: (
        target.elements.namedItem("dateOfBirth") as HTMLInputElement
      )?.value,
      age: (target.elements.namedItem("age") as HTMLInputElement)?.value,
      height: (target.elements.namedItem("height") as HTMLInputElement)?.value,
      weight: (target.elements.namedItem("weight") as HTMLInputElement)?.value,
      allergies: (target.elements.namedItem("allergies") as HTMLInputElement)
        ?.value,
      medications: (
        target.elements.namedItem("medications") as HTMLInputElement
      )?.value,
      medicationName: (
        target.elements.namedItem("medicationName") as HTMLInputElement
      )?.value,
      disability: (target.elements.namedItem("disability") as HTMLInputElement)
        ?.value,
      disabilityType: (
        target.elements.namedItem("disability-type") as HTMLInputElement
      )?.value,
      smoking: (target.elements.namedItem("smoking") as HTMLInputElement)
        ?.value,
      smokingFrecuency: (
        target.elements.namedItem("smokingFrecuency") as HTMLInputElement
      )?.value,
      alcoholConsumption: (
        target.elements.namedItem("alcoholConsumption") as HTMLInputElement
      )?.value,
      drinkFrecuency: (
        target.elements.namedItem("drinkFrecuency") as HTMLInputElement
      )?.value,
      psychoactiveSubstances: (
        target.elements.namedItem("psychoactiveSubstances") as HTMLInputElement
      )?.value,
    };

    console.log("La data a enviar: ", formData);
  };

  return (
    <div className="h-screen bg-gray-100 flex flex-col items-center p-4 md:p-8 lg:w-full lg:grid lg:grid-cols-2">
      {/* Header */}

      <SectionTitle title="Mis datos medicos" />

      {/* Profile Picture */}
      <div className="w-full py-10 z-10 flex flex-col items-center lg:grid grid__profile">
        <div className="w-[122px] h-[122px] mt-9 bg-[#89BAD8] rounded-full flex items-center justify-center mb-2 lg:mb-0 lg:justify-self-center">
          <Image
            src="/lapiz-de-usuario.png"
            alt="Edit Photo"
            width={70}
            height={70}
            className="ml-4"
          />
        </div>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-[26px] text-[12px] max-w-[325px]"
      >
        {/* Fecha de nacimiento y Edad */}
        <label className="flex gap-1 items-center justify-between">
          <div className="flex items-end">
            <span> Fecha de Nacimiento</span>
            <Input twClass="w-[105px]" type="date" name="dateOfBirth" />
          </div>

          <div className="flex items-end">
            <span>Edad</span>
            <Input twClass="w-[53px]" type="string" name="age" />
          </div>
        </label>
        {/* Peso y altura */}
        {/* <CustomField /> */}

        <div className="flex gap-3">
          {/* Estatura */}
          <div className="flex items-center">
            <label htmlFor="">Estatura</label>

            <Input twClass="w-[53px]" type="string" name="height" />
            <select name="" id="">
              <option value="">Metros</option>
            </select>
          </div>
          {/* Pëso */}
          <div className="flex items-center">
            <label htmlFor="">Peso</label>

            <Input twClass="w-[53px]" type="string" name="weight" />
            <select name="unity" id="">
              <option value="">Kg</option>
            </select>
          </div>
        </div>

        {/* Alergias */}
        <div>
          <div className="flex w-full">
            <label htmlFor="">Alergias</label>
            <div className="flex gap-2 px-2">
              <label htmlFor="">Si</label>
              <input type="radio" value="yes" name="allergies" />
              <label htmlFor="">No</label>
              <input type="radio" value="no" name="allergies" />
            </div>
          </div>
        </div>

        {/* Medicamentos */}

        <div className="flex items-center">
          <label htmlFor="">Medicamentos</label>
          <div className="flex gap-2 px-2">
            <label htmlFor="">Si</label>
            <input type="radio" value="si" name="medications" />
            <label htmlFor="">No</label>
            <input type="radio" value="no" name="medications" />
          </div>
          <div className="flex">
            <label htmlFor="">Cuales</label>
            <Input type="text" name="medicationName" />
          </div>
        </div>

        {/* Discapacidad */}
        <div className="flex">
          <label htmlFor="">Discapacidad</label>
          <div className="flex gap-2 px-2">
            <label htmlFor="">Si</label>
            <input type="radio" value="si" name="disability" />
            <label htmlFor="">No</label>
            <input type="radio" value="no" name="disability" />
          </div>
          <select name="disability-type" id="">
            <option value="Cognitive">Cognitiva</option>
            <option value="Visual">Visual</option>
            <option value="Auditory">Auditory</option>
          </select>
        </div>

        {/* Fumador */}
        <div className="flex">
          <label htmlFor="">¿Fuma?</label>
          <div className="flex gap-2 px-2">
            <label htmlFor="">Si</label>
            <input type="radio" value="Yes" name="smoking" />
            <label htmlFor="">No</label>
            <input type="radio" value="No" name="smoking" />
          </div>
          <select name="smokingFrecuency" id="">
            <option value="Occasionally">Occasionally</option>
            <option value="daily">Daily</option>
          </select>
        </div>
        {/* Consume alcohol */}
        <div className="flex">
          <label htmlFor="">¿Bebe Alcohol?</label>
          <div className="flex gap-2 px-2">
            <label htmlFor="">Si</label>
            <input type="radio" value="Yes" name="alcoholConsumption" />
            <label htmlFor="">No</label>
            <input type="radio" value="No" name="alcoholConsumption" />
          </div>
          <select name="drinkFrecuency" id="">
            <option value="ocacionalmente">Ocacionalmente</option>
            <option value="daily">Daily</option>
          </select>
        </div>

        {/* Sustancias psicoactivas */}
        <div className="flex">
          <label htmlFor="">¿Usa sustancias psicoactivas?</label>
          <div className="flex gap-2 px-2">
            <label htmlFor="">Si</label>
            <input type="radio" value="Yes" name="psychoactiveSubstances" />
            <label htmlFor="">No</label>
            <input type="radio" value="No" name="psychoactiveSubstances" />
          </div>
        </div>

        <button
          type="submit"
          className="w-[70%] text-white rounded-lg bg-[#812B75] py-3 m-auto my-4"
        >
          Continuar
        </button>
      </form>
    </div>
  );
};

export default DataCompletionPatient;
