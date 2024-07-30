import Link from "next/link";
import React from "react";
import "./page.css";

const SettingsPatient = () => {
  return (
    <div className="w-[430px] h-[932px] setting bg-gray-100 flex flex-col items-center p-4">
      {/* Header */}
      <div className="flex items-center w-full justify-between mb-4">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 rounded-full flex items-center justify-center">
            <img
              className="w-6 h-6"
              src="/llave-inglesa.png"
              alt="Settings Icon"
            />
          </div>
          <span className="font-semibold">Configuración</span>
        </div>
      </div>

      {/* Settings List */}
      <div className="w-full h-[500px] z-20 justify-between flex flex-col max-w-[350px] mx-auto">
        <Link href={"/paciente/program-date"} className="flex items-center">
          <img
            className="w-6 h-6 mr-4"
            src="/reloj-cinco-treinta.png"
            alt="Clinic"
          />
          <span>Citas Programadas</span>
        </Link>
        <Link href={"/user"} className="flex items-center">
          <img
            className="w-6 h-6 mr-4"
            src="/documento-firmado.png"
            alt="Patients"
          />
          <span>Mi Historia Clinica</span>
        </Link>
        <li className="flex items-center">
          <img
            className="w-6 h-6 mr-4"
            src="/libro-atlas.png"
            alt="Appointments"
          />
          <span>Idioma</span>
        </li>
        <li className="flex items-center">
          <img
            className="w-6 h-6 mr-4"
            src="/tarjeta-de-credito.png"
            alt="Language"
          />
          <span>Configuración de pagos</span>
        </li>
        <li className="flex items-center">
          <img className="w-6 h-6 mr-4" src="/llave.png" alt="Payments" />
          <span>Cambiar Contraseña</span>
        </li>
        <li className="flex items-center">
          <img
            className="w-6 h-6 mr-4"
            src="/interrogatorio.png"
            alt="Change Password"
          />
          <span>Ayuda y Soporte</span>
        </li>
        <li className="flex items-center">
          <img
            className="w-6 h-6 mr-4"
            src="/rectangulo-xmark.png"
            alt="Delete Account"
          />
          <span>Cerrar la cuenta</span>
        </li>
      </div>

      {/* Logout Button */}
      <button className="w-full bg-purple-500 text-white py-3 rounded-lg flex items-center justify-center">
        <span>Cerrar sesión</span>
      </button>
    </div>
  );
};

export default SettingsPatient;
