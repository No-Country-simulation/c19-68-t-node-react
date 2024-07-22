import React from "react";
import "./page.css";
const EditProfilePage = () => {
  return (
    <div className="h-screen bg-gray-100 flex flex-col items-center p-4 md:p-8 lg:w-full lg:grid lg:grid-cols-2">

        {/* Header */}
        <div className="flex items-center w-full justify-between lg:hidden">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
              <img
                className="w-5 h-5"
                src="/circulo-de-usuario.png"
                alt="User Icon"
              />
            </div>
            <span className="font-semibold">Editar Perfil</span>
          </div>
          <button className="text-gray-500">
            <img className="w-6 h-6" src="/x.png" alt="Close Icon" />
          </button>
        </div>

        {/* Profile Picture */}
        <div className="w-full flex flex-col items-center mb-4 lg:grid lg:mb-0 grid__profile">
          <h2 className="hidden lg:block font-bold text-[24px] self-start justify-self-center pr-40">
            Mi perfil
          </h2>
          <div className="w-24 h-24 lg:w-[150px] lg:h-[150px] bg-blue-200 rounded-full flex items-center justify-center mb-2 lg:mb-0 lg:justify-self-center">
            <img
              className="w-12 h-12 "
              src="/lapiz-de-usuario.png"
              alt="Edit Photo"
            />
          </div>
          <button className="text-blue-500 lg:hidden">
            Editar foto de perfil
          </button>
          <article className="hidden lg:block justify-self-center">
            <h3 className="font-bold text-[20px]">Informacion personal</h3>
            <ul className="grid grid-cols-3 grid-rows-3 gap-1">
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
        <form className="w-full bg-white p-4 rounded-lg shadow lg:h-[90%] lg:max-h-[550px]">
          <div className="mb-4">
            <label className="block text-gray-700">Fecha de Nacimiento</label>
            <input
              type="text"
              className="w-full border-gray-300 rounded mt-1"
              placeholder="AAAA, MM, DD"
            />
          </div>
          <div className="mb-4 flex space-x-4">
            <div className="flex-1">
              <label className="block text-gray-700">Edad</label>
              <input
                type="text"
                className="w-full border-gray-300 rounded mt-1"
              />
            </div>
            <div className="flex-1">
              <label className="block text-gray-700">ID</label>
              <input
                type="text"
                className="w-full border-gray-300 rounded mt-1"
              />
            </div>
            <div className="flex-1">
              <label className="block text-gray-700">Número</label>
              <input
                type="text"
                className="w-full border-gray-300 rounded mt-1"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">E-mail</label>
            <input
              type="email"
              className="w-full border-gray-300 rounded mt-1"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Dirección</label>
            <input
              type="text"
              className="w-full border-gray-300 rounded mt-1"
            />
          </div>
          <div className="mb-4 flex space-x-4">
            <div className="flex-1">
              <label className="block text-gray-700">País</label>
              <input
                type="text"
                className="w-full border-gray-300 rounded mt-1"
              />
            </div>
            <div className="flex-1">
              <label className="block text-gray-700">Código postal</label>
              <input
                type="text"
                className="w-full border-gray-300 rounded mt-1"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Teléfono</label>
            <input
              type="text"
              className="w-full border-gray-300 rounded mt-1"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Nacionalidad</label>
            <input
              type="text"
              className="w-full border-gray-300 rounded mt-1"
            />
          </div>
          <button className="w-full bg-purple-500 text-white py-2 rounded">
            Guardar
          </button>
        </form>
    </div>
  );
};

export default EditProfilePage;
