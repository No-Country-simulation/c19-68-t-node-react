import React from "react";
import "./page.css";
import Input from "@/components/Input";
import Image from "next/image";
const EditProfilePage = () => {
  return (
    <div className="h-screen bg-gray-100 flex flex-col items-center p-4 md:p-8 lg:w-full lg:grid lg:grid-cols-2">
        {/* Header */}
        <header className="self-start m-4 pb-[5px] w-[197px] lg:hidden gradient">
          <div className="flex w-[197px] items-center justify-center space-x-4">
            
              <img
                className="w-[48px] h-[48px] "
                src="/circulo-de-usuario.png"
                alt="User Icon"
              />
            <span className="font-bold text-[20px]">Editar Perfil</span>
          </div>

        </header>

        {/* Profile Picture */}
        <div className="w-full py-10 z-10 flex flex-col items-center lg:grid grid__profile">
          <h2 className="hidden lg:block font-bold text-[24px] self-start justify-self-center pr-40">
            Mi perfil
          </h2>
          <div className="w-[150px] h-[150px] bg-blue-200 rounded-full flex items-center justify-center mb-2 lg:mb-0 lg:justify-self-center">
            <img
              className="w-[20px] h-[20px] "
              src="/lapiz-de-usuario.png"
              alt="Edit Photo"
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
        <form className="flex flex-col gap-[26px] text-[12px] max-w-[325px]">
            {/* Fecha de nacimiento y Edad */}
            <label className="flex gap-1 items-center justify-between">
              <div className="flex items-end">
                <span> Fecha de Nacimiento</span>
              <Input twClass="w-[105px]" type="date" />
                </div>
              
              <div  className="flex items-end">

              <span>Edad</span>
              <Input twClass="w-[53px]" type="string" />
              </div>
            </label>
            {/* Género */}
            <label className="flex flex-col">
              <div className="flex justify-between">

              <article className="flex items-center gap-2">
              <Image
              src={'/venus-marte.png'}
              width={28.78}
              height={28.78}
              alt="genre"
              />
              <span>Sexo</span>
              </article>
              <label className="flex gap-x-1 items-center">
                <span>Masculino</span>
                <input className="radio" type="radio"  name="genre" id="genre"  />
              </label>
              <article className="flex gap-x-1 items-center">
                <span>Femenino</span>
                <input className="radio" type="radio"  name="genre" id="genre"  />
              </article>
              <article className="flex gap-x-1 items-center">
                <span>Otro</span>
                <input className="radio" type="radio"  name="genre" id="genre"  />
              </article>
              </div>
              <p className="text-[8px]">El sexo solo se puede editar una vez recuerda que si necesitas modificarlo una vez más debes contactarte con soporte de la app</p>
            </label>
            {/* Identificación */}
            <label className="flex justify-between">
              <div  className="flex items-end">

              <span>ID</span>
              <Input twClass="w-[89px]" type="string" />
              </div>
              
              <div  className="flex items-end">

              <span>Número</span>
              <Input twClass="w-[145px]" type="string" />
              </div>
            </label>
            {/* Teléfono */}
            <label className="flex justify-between">
              <div  className="flex items-end justify-between ">

              <span>Telefono</span>
              <Input twClass="w-[90px]" type="string" />
              </div>
              <div  className="flex items-end justify-between ">

              <span>Cod Postal</span>
              <Input twClass="w-[90px]" type="string" />
              </div>
            </label>
            {/* Dirección */}
            <label className="flex items-end justify-between ">
              <span>Direccion</span>
              <Input twClass="w-[260px]" type="string" />
            </label>
            {/* País */}
            <label className="flex justify-between">
              <div  className="flex items-end">

              <span>Pais</span>
              <Input twClass="w-[119px]" type="string" />
              </div>
              <div  className="flex items-end justify-between ">

              <span>Ciudad</span>
              <Input twClass="w-[120px]" type="string" />
              </div>
            </label>
            {/* Email */}
            <label className="justify-between flex items-end ">
              <span>Email</span>
              <Input twClass="w-[285px]" type="string" />
            </label>

            <button className="w-[70%] text-white rounded-lg bg-[#812B75] py-3 m-auto my-4">
              Guardar
            </button>
          </form>
    </div>
  );
};

export default EditProfilePage;
