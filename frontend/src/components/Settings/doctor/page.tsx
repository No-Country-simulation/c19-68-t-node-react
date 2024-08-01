import React from "react";
import Link from "next/link";
import "./page.css";

interface Props {
  rol: string;
  id: string;
}

const SettingsDoctor = ({rol, id}:Props) => {
  return (
    <div className="w-[430px] h-[932px] settingDoctor bg-gray-100 flex flex-col items-center p-4">
      {/* Header */}
      <div className="flex items-center w-full justify-between mb-4">
        <div className="flex items-center gap-1 gradient">
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
      <div className="w-full h-[500px] justify-between flex flex-col max-w-[350px] mx-auto">
        <Link href={""} className="flex items-center">
        <img className="w-[27px] h-[27px] mr-4"
            src="/settings-doctor/guidance_computer-room.png"
            alt="Clinic"
          />
          <span>Mi consultorio</span>
        </Link>
        <Link href={""} className="flex items-center">
          <img
            className="w-[27px] h-[27px] mr-4"
            src="/settings-doctor/clarity_group-line.png"
            alt="Patients"
          />
          <span>Mi lista de pacientes</span>
        </Link>
        <li className="flex items-center">
          <img
            className="w-[29px] h-[29px] mr-4"
            src="/settings-doctor/material-symbols-light_calendar-clock-outline.png"
            alt="Appointments"
          />
          <span>Citas</span>
        </li>
        <li className="flex items-center">
          <img
            className="w-[27px] h-[27px] mr-4"
            src="/settings-doctor/material-symbols-light_emoji-language-outline.png"
            alt="Language"
          />
          <span>Idioma</span>
        </li>
        <li className="flex items-center">
          <img
            className="w-[27px] h-[18.47px] mr-4"
            src="/settings-doctor/Vector.png"
            alt="Payments"
          />
          <span>Mis pagos</span>
        </li>
        <li className="flex items-center">
          <img
            className="w-[27px] h-[27px] mr-4"
            src="/settings-doctor/ph_key-thin.png"
            alt="Change Password"
          />
          <span>Cambiar contraseña</span>
        </li>
        <li className="flex items-center">
          <img
            className="w-[29px] h-[29px] mr-4"
            src="/settings-doctor/material-symbols-light_contact-support-outline.png"
            alt="Support"
          />
          <span>Ayuda y soporte</span>
        </li>
        <li className="flex items-center">
          <img
            className="w-[23px] h-[23px] mr-4"
            src="/settings/Vector-Salir.png"
            alt="Delete Account"
          />
          <span>Cerrar la cuenta</span>
        </li>
      </div>

      {/* Logout Button */}
      <div className="flex justify-center items-center ">
        <button className="w-[205px] h-[43px] bg-[#812B75] align-bottom text-[#F2F2F2] py-3 rounded-lg flex items-center justify-center">
          <span className="font-bold ">Cerrar sesión</span>
        </button>
      </div>
    </div>
  );
};

export default SettingsDoctor;
