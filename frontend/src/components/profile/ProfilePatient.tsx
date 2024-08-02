"use client";

import React, { useEffect } from "react";
import "./page.css";
import Input from "@/components/Input";
import Image from "next/image";
import useFetch from "@/hooks/useFetch";
import { format } from "@formkit/tempo";
import InputReadOnly from "../InputReadOnly";
import { useForm, SubmitHandler } from "react-hook-form";

interface Props {
  id: string;
}

type FormValues = {
  dateOfBirth: string;
  adress: string;
  city: string;
  postalCode: string;
  idType: string;
  idNumber: string;
  number: string;
};

const ProfilePatient = ({ id }: Props) => {
  const [patient, getPatient] = useFetch();

  useEffect(() => {
    getPatient(
      `https://e-medicine-backend.vercel.app/patients/profilePat/${id}`
    );
  }, []);

  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  /* Format Dates */

  const date = patient?.patient.clinicalData.dateOfBirth;
  const formatDate = format(date, "YYYY-MM-DD", "es");
  const formatMinusDate = format(date, "YYYY-MM-DD", "es")
    .replaceAll("-", " ")
    .split(" ")
    .reverse();
  const today = new Date();
  const formatToday = format(today, "YYYY-MM-DD", "es")
    .replaceAll("-", " ")
    .split(" ")
    .reverse();
  const userDate = +formatToday[2] - +formatMinusDate[2];

  console.log(patient);

  return (
    <div className="h-screen bg-gray-100 flex flex-col items-center p-4 md:p-8 lg:w-full lg:grid lg:grid-cols-2">
      {/* Header */}
      <header className="self-start m-4 pb-[5px] w-[197px] lg:hidden gradient">
        <div className="flex w-[197px] bg items-center justify-center space-x-4">
          <Image
            src={
              patient?.patient.photo
                ? patient?.patient.photo
                : "/assets/data-completion/user-icon-edit.png"
            }
            width={30}
            height={30}
            alt="perfil"
            className="rounded-full"
          />
          <span className="font-bold text-[20px]">Editar Perfil</span>
        </div>
      </header>
      {/* Profile Picture */}
      <div className="w-full py-10 z-10 flex flex-col items-center lg:grid grid__profile">
        <h2 className="hidden lg:block font-bold text-[24px] self-start justify-self-center pr-40">
          Mi perfil
        </h2>
        <div className="w-[150px] h-[150px] rounded-full flex items-center justify-center mb-2 lg:mb-0 lg:justify-self-center">
          <Image
            src={
              patient?.patient.photo
                ? patient?.patient.photo
                : "/assets/data-completion/user-icon-edit.png"
            }
            width={130}
            height={130}
            alt="perfil"
            className="rounded-full"
          />
        </div>
        <button className="text-blue-500 lg:hidden">
          Editar foto de perfil
        </button>
        <article className="hidden lg:block justify-self-center">
          <h3 className="font-bold text-[20px]">Informacion personal</h3>
          <ul className="grid grid-cols-3 text-[12px] grid-rows-3 gap-1">
            <li className="flex flex-col ">
              <span className="font-semibold">Nombre</span>Nombre
            </li>
            <li className="flex flex-col ">
              <span className="font-semibold">Apellido</span>Apellido
            </li>
            <li className="flex flex-col ">
              <span className="font-semibold">Telefono</span>Telefono
            </li>
            <li className="flex flex-col ">
              <span className="font-semibold">Email</span>Email
            </li>
            <li className="flex flex-col ">
              <span className="font-semibold">Pais</span>Pais
            </li>
            <li className="flex flex-col ">
              <span className="font-semibold">Ciudad</span>Ciudad
            </li>
            <li className="flex flex-col ">
              <span className="font-semibold">Cod Postal</span>Cod Postal
            </li>
          </ul>
        </article>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-[26px] text-[12px] max-w-[325px]">
        {/* Fecha de nacimiento y Edad */}
        <label className="flex gap-1 items-center justify-between">
          <div className="flex items-end ">
            <span> Fecha de Nacimiento</span>
            <InputReadOnly
              twClass="w-[105px]"
              type="date"
              value={formatDate ? formatDate : ""}
            />
          </div>

          <div className="flex items-end">
            <span>Edad</span>
            <InputReadOnly
              twClass="w-[53px]"
              value={userDate ? userDate : ""}
              type="string"
            />
          </div>
        </label>
        {/* Género */}
        <article className="flex flex-col">
          <div className="flex justify-between">
            <article className="flex items-center gap-2">
              <Image
                src={"/venus-marte.png"}
                width={28.78}
                height={28.78}
                alt="genre"
              />
              <span>Sexo</span>
            </article>
            <label className="flex gap-x-1 items-center">
              <span>Masculino</span>
              {patient?.patient.gender === "male" ? (
                <input
                  className="radio"
                  type="radio"
                  checked
                  name="genre"
                  id="genre"
                />
              ) : (
                <input className="radio" type="radio" name="genre" id="genre" />
              )}
            </label>
            <label className="flex gap-x-1 items-center">
              <span>Femenino</span>
              {patient?.patient.gender === "female" ? (
                <input
                  className="radio"
                  type="radio"
                  checked
                  name="genre"
                  id="genre"
                />
              ) : (
                <input className="radio" type="radio" name="genre" id="genre" />
              )}
            </label>
            <label className="flex gap-x-1 items-center">
              <span>Otro</span>
              {patient?.patient.gender === "other" ? (
                <input
                  className="radio"
                  type="radio"
                  checked
                  name="genre"
                  id="genre"
                />
              ) : (
                <input className="radio" type="radio" name="genre" id="genre" />
              )}
            </label>
          </div>
          <p className="text-[8px]">
            El sexo solo se puede editar una vez recuerda que si necesitas
            modificarlo una vez más debes contactarte con soporte de la app
          </p>
        </article>
        {/* Identificación */}
        <label className="flex justify-between">
          <div className="flex items-end gap-2">
            <span>ID</span>

              <select {...register('idType')} className="w-[89px] bg-[#f3f4f6] border-b border-[#35799F]">
                <option value="DNI" selected>DNI</option>
                <option value="Pasaporte">Pasaporte</option>
              </select>
            
          </div>

          <div className="flex items-end">
            <span>Número</span>
            <input
              type="string"
              {...register("number")}
              className={`border-b border-solid pt-1 bg-transparent border-[#35799F] px-2 w-[145px]`}
            />
          </div>
        </label>
        {/* Teléfono */}
        <label className="flex justify-between">
          <div className="flex items-end justify-between ">
            <span>Telefono</span>
            <InputReadOnly
              twClass="w-[110px]"
              value={patient?.patient.phone}
              type="string"
            />
          </div>
          <div className="flex items-end justify-between ">
            <span>Cod Postal</span>
            <input
              type="string"
              {...register("postalCode")}
              className={`border-b border-solid pt-1 bg-transparent border-[#35799F] px-2 w-[95px]`}
            />
          </div>
        </label>
        {/* Dirección */}
        <label className="flex items-end justify-between ">
          <span>Direccion</span>
          <input
              type="string"
              {...register("adress")}
              className={`border-b border-solid pt-1 bg-transparent border-[#35799F] px-2 w-[260px]`}
            />
        </label>
        {/* País */}
        <label className="flex justify-between">
          <div className="flex items-end">
            <span>Pais</span>
            <InputReadOnly
              twClass="w-[119px]"
              value={patient?.patient.country}
              type="string"
            />
          </div>
          <div className="flex items-end justify-between">
            <span>Ciudad</span>
            <input
              type="string"
              {...register("city")}
              className={`border-b border-solid pt-1 bg-transparent border-[#35799F] px-2 w-[120px]`}
            />
          </div>
        </label>
        {/* Email */}
        <label className="justify-between flex items-end ">
          <span>Email</span>
          <InputReadOnly
            twClass="w-[285px]"
            value={patient?.patient.email}
            type="string"
          />
        </label>

        <button className="w-[70%] text-white rounded-lg bg-[#812B75] py-3 m-auto my-4">
          Guardar
        </button>
      </form>
    </div>
  );
};

export default ProfilePatient;
