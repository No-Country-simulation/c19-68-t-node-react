"use client";
import PhoneNumberInput from "@/components/authentication/ui/authPhoneField";
import DayCheckbox from "@/components/data-completion/DayCheckbox";
import Input from "@/components/Input";
import SectionTitle from "@/components/ui/sectionTitle";
import Image from "next/image";
import { useState } from "react";

const DataCompletionDoctor = () => {
  const [phone, setPhone] = useState("");
  return (
    <div className="h-screen bg-gray-100 flex flex-col items-center p-4 md:p-8 lg:w-full lg:grid lg:grid-cols-2">
      {/* Header */}

      <SectionTitle title="Configurar datos de atencion" />

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
      <form className="flex flex-col gap-[26px] text-[12px] max-w-[325px]">
        {/* ID y Numero */}
        <div className="id-number-container flex w-full justify-between">
          {/* ID */}
          <div className="flex flex-col w-screen">
            <div className="flex">
              <Image
                src="/assets/data-completion/identificaiton-icon.png"
                width={28}
                height={28}
                alt="identification-icon"
              />
              <label htmlFor="" className="text-base">
                ID
              </label>
            </div>
            <div className="w-full">
              <select name="" id="" className="w-full">
                <option value=""></option>
                <option value="">DNI</option>
              </select>
            </div>
          </div>
          {/* Numero */}
          <div className="flex flex-col w-[100%]">
            <div className="flex items-center gap-1">
              <span className="text-xl">#</span>
              <label htmlFor="">Numero</label>
            </div>
            <div>
              <Input type="input" name="numero" />
            </div>
          </div>
        </div>
        {/* PAIS Y TELEFONO */}
        <div className="flex items-center gap-2">
          {/* PAIS */}
          <div>
            <div className="flex items-center gap-1">
              <Image
                src="/assets/signup/world-form-icon.png"
                width={24}
                height={24}
                alt="world icon"
              />
              <label htmlFor="">Pais</label>
            </div>
            <Input type="text" name="country" />
          </div>
          {/* TELEFONO */}
          <PhoneNumberInput value={phone} onChange={setPhone} name="phone" />
        </div>

        {/* Horario de atencion */}
        <div>
          <div className="flex items-center gap-2">
            <Image
              src="/assets/data-completion/reloj-icon.png"
              width={21}
              height={21}
              alt="reloj-icon"
            />
            <label htmlFor="">Horario de atencion</label>
          </div>
          {/* Time slot cointainer */}
          <div className="time-slots-container flex flex-col">
            {/* First time slot */}
            <div className="first-time-slot flex">
              <div className="flex items-center space-x-2">
                <span>Desde</span>
                <div className="flex items-center space-x-1 border-b border-gray-300">
                  <input
                    type="number"
                    value="8"
                    className="w-10 text-center outline-none"
                  />
                  <span>:</span>
                  <input
                    type="number"
                    value="00"
                    className="w-10 text-center outline-none"
                  />
                  <select className="outline-none">
                    <option>AM</option>
                    <option>PM</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span>Desde</span>
                <div className="flex items-center space-x-1 border-b border-gray-300">
                  <input
                    type="number"
                    value="8"
                    className="w-10 text-center outline-none"
                  />
                  <span>:</span>
                  <input
                    type="number"
                    value="00"
                    className="w-10 text-center outline-none"
                  />
                  <select className="outline-none">
                    <option>AM</option>
                    <option>PM</option>
                  </select>
                </div>
              </div>
            </div>
            {/* Second time slot */}
            <div className="second-time-slot flex">
              <div className="flex items-center space-x-2">
                <span>Desde</span>
                <div className="flex items-center space-x-1 border-b border-gray-300">
                  <input
                    type="number"
                    value="8"
                    className="w-10 text-center outline-none"
                  />
                  <span>:</span>
                  <input
                    type="number"
                    value="00"
                    className="w-10 text-center outline-none"
                  />
                  <select className="outline-none">
                    <option>AM</option>
                    <option>PM</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span>Desde</span>
                <div className="flex items-center space-x-1 border-b border-gray-300">
                  <input
                    type="number"
                    value="8"
                    className="w-10 text-center outline-none"
                  />
                  <span>:</span>
                  <input
                    type="number"
                    value="00"
                    className="w-10 text-center outline-none"
                  />
                  <select className="outline-none">
                    <option>AM</option>
                    <option>PM</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dias habiles */}
        <div>
          <div className="flex items-center gap-1">
            <Image
              src="/assets/data-completion/dia-habil-icon.png"
              width={22}
              height={22}
              alt="reloj-icon"
            />
            <label htmlFor=""> Dias Habiles</label>
          </div>

          {/* Day select section */}
          <div className="w-full flex gap-2">
            <DayCheckbox day="Lun" />
            <DayCheckbox day="Mar" />
            <DayCheckbox day="Mie" />
            <DayCheckbox day="Jue" />
            <DayCheckbox day="Vie" />
            <DayCheckbox day="Sab" />
            <DayCheckbox day="Dom" />
          </div>
        </div>

        {/* Valor de la consulta */}

        <div className="flex gap-3">
          <Image
            src="/assets/data-completion/billete.png"
            width={22}
            height={22}
            alt="reloj-icon"
          />
          <label htmlFor="">Valor de la consulta</label>
          <select name="" id="">
            <option value="">28 USD</option>
            <option value="">29 USD</option>
            <option value="">30 USD</option>
            <option value="">31 USD</option>
          </select>
        </div>

        <button className="w-[70%] text-white rounded-lg bg-[#812B75] py-3 m-auto my-4">
          Guardar
        </button>
      </form>
    </div>
  );
};


export default DataCompletionDoctor