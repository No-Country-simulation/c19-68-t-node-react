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
      clinicalData: {
        dateOfBirth: (
          target.elements.namedItem("dateOfBirth") as HTMLInputElement
        )?.value,
        age: (target.elements.namedItem("age") as HTMLInputElement)?.value,
        height: (target.elements.namedItem("height") as HTMLInputElement)
          ?.value,
        weight: (target.elements.namedItem("weight") as HTMLInputElement)
          ?.value,
        allergies: (target.elements.namedItem("allergies") as HTMLInputElement)
          ?.value,
        medications: (
          target.elements.namedItem("medications") as HTMLInputElement
        )?.value,
        medicationName: (
          target.elements.namedItem("medicationName") as HTMLInputElement
        )?.value,
        disability: (
          target.elements.namedItem("disability") as HTMLInputElement
        )?.value,
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
          target.elements.namedItem(
            "psychoactiveSubstances"
          ) as HTMLInputElement
        )?.value,
      },
    };

    console.log("La data a enviar: ", formData);
  };

  return (
    <div className="h-screen h-min-[100vh] bg-gray-100 flex flex-col items-center p-4 md:p-8 lg:w-full lg:grid lg:grid-cols-2">
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

        <div className="flex gap-3 justify-between">
          {/* Estatura */}
          <div className="flex items-center gap-2">
            <label className="flex items-end">
              <span>Estatura</span>
              <Input twClass="w-[53px]" type="string" name="height" />
            </label>

            <select className="bg-transparent border-b-[1px] border-[#35799F] self-end">
              <option value="">Metros</option>
            </select>
          </div>
          {/* Pëso */}
          <div className="flex">
            <label>
              <span>Peso</span>
              <Input twClass="w-[53px]" type="string" name="weight" />
            </label>

            <select className="bg-transparent">
              <option value="" selected>
                Kg
              </option>
            </select>
          </div>
        </div>
        {/* Alergias */}
        <div>
          <div className="flex w-full">
            <span>Alergias</span>
            <div className="flex gap-4 px-2">
              <label htmlFor="" className="flex items-center gap-1">
                <span>Si</span>
                <input
                  type="radio"
                  className="radio"
                  value="yes"
                  name="allergies"
                />
              </label>
              <label htmlFor="" className="flex items-center gap-1">
                <span>No</span>
                <input
                  type="radio"
                  className="radio"
                  value="no"
                  name="allergies"
                />
              </label>
            </div>
          </div>
        </div>

        {/* Medicamentos */}

        <div className="flex items-center justify-between">
          <label htmlFor="">Medicamentos</label>
          <div className="flex gap-4 px-2">
            <label htmlFor="" className="flex items-center gap-1">
              <span>Si</span>
              <input
                type="radio"
                className="radio"
                value="si"
                name="medications"
              />
            </label>
            <label htmlFor="" className="flex items-center gap-1">
              <span>No</span>
              <input
                type="radio"
                className="radio"
                value="no"
                name="medications"
              />
            </label>
          </div>
          <div className="flex">
            <label htmlFor="" className="flex items-end gap-1">
              <span>Cuales</span>
              <Input type="text" twClass="w-[90px]" name="medicationName" />
            </label>
          </div>
        </div>

        {/* Discapacidad */}
        <div className="flex justify-between">
          <label htmlFor="">Discapacidad</label>
          <div className="flex gap-4 px-2">
            <label htmlFor="" className="flex items-center gap-1">
              <span>Si</span>
              <input
                type="radio"
                className="radio"
                value="si"
                name="disability"
              />
            </label>
            <label htmlFor="" className="flex items-center gap-1">
              <span>No</span>
              <input
                type="radio"
                className="radio"
                value="no"
                name="disability"
              />
            </label>
          </div>
          <select
            name="disability-type"
            id=""
            className="bg-transparent border-b-[1px] w-[100px] border-[#35799F]"
          >
            <option value="Cognitive">Cognitiva</option>
            <option value="Visual">Visual</option>
            <option value="Auditory">Auditory</option>
          </select>
        </div>

        {/* Fumador */}
        <div className="flex gap-2 justify-between">
          <span>¿Fuma?</span>
          <div className="flex gap-4">

          <label htmlFor="" className="flex items-center gap-1">
            <span>Si</span>

            <input type="radio" className="radio" value="Yes" name="smoking" />
          </label>
          <label htmlFor="" className="flex items-center gap-1">
            <span>No</span>
            <input type="radio" className="radio" value="No" name="smoking" />
          </label>
          </div>

          <select
            name="smokingFrecuency"
            id=""
            className="bg-transparent border-b-[1px] border-[#35799F]"
          >
            <option value="Occasionally">Occasionally</option>
            <option value="daily">Daily</option>
          </select>
        </div>
        {/* Consume alcohol */}
        <div className="flex justify-between">
          <label htmlFor="">¿Bebe Alcohol?</label>
          <div className="flex gap-4 px-2">
            <label htmlFor="" className="flex items-center gap-1">
              <span>Si</span>

              <input
                type="radio"
                className="radio"
                value="Yes"
                name="alcoholConsumption"
              />
            </label>
            <label htmlFor="" className="flex items-center gap-1">
              <span>No</span>
              <input
                type="radio"
                className="radio"
                value="No"
                name="alcoholConsumption"
              />
            </label>
          </div>
          <select
            name="drinkFrecuency"
            id=""
            className="bg-transparent border-b-[1px] border-[#35799F]"
          >
            <option value="ocacionalmente">Ocacionalmente</option>
            <option value="daily">Daily</option>
          </select>
        </div>

        {/* Sustancias psicoactivas */}
        <div className="flex gap-2">
          <span>¿Usa sustancias psicoactivas?</span>
          <label htmlFor="" className="flex items-center gap-1">
            <span>Si</span>
            <input
              type="radio"
              className="radio"
              value="Yes"
              name="psychoactiveSubstances"
            />
          </label>
          <label htmlFor="" className="flex items-center gap-1">
            <span>No</span>
            <input
              type="radio"
              className="radio"
              value="No"
              name="psychoactiveSubstances"
            />
          </label>
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
