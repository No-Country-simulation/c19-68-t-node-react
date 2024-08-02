import Link from "next/link";
import React from "react";
import "./page.css";
import { logout } from "@/utils/actions";

interface Props {
  rol: string;
  id: string;
}
const SettingsPatient = ({ rol, id }: Props) => {
  const handleLogout = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Cerrando sesión");

    try {
      await logout(); // Espera a que se elimine la sesión
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <div className="w-[430px] h-[932px] setting flex flex-col items-center p-4 ">
      {/* Header */}
      <div className="w-[145px]mt-6 mb-21 h-[40px] flex items-end">
        <div className="flex items-center gradient">
          <div className="w-10 h-10 rounded-full flex items-center justify-center ">
            <img
              className="w-6 h-6"
              src="/llave-inglesa.png"
              alt="Settings Icon"
            />
          </div>
          <span className="font-bold text-[20px]">Configuración</span>
        </div>
      </div>

      {/* Settings List */}
      <div className="w-full h-[500px] justify-between flex flex-col max-w-[350px] mx-auto z-20">
        <Link href={`/${rol}/${id}/program-date`} className="flex items-center">
          <img
            className="w-[21px] h-[22px] mr-4"
            src="/settings/clarity_clock-line.png"
            alt="Clinic"
          />
          <span>Citas Programadas</span>
        </Link>
        <Link href={`/${rol}/${id}/user`} className="flex items-center">
          <img
            className="w-[18px] h-[24px] mr-4"
            src="/settings/et_document.png"
            alt="Patients"
          />
          <span>Mi Historia Clinica</span>
        </Link>
        <Link href={`/${rol}/${id}/language`} className="flex items-center">
          <img
            className="w-[24px] h-[24px] mr-4"
            src="/settings/material-symbols-light_emoji-language-outline.png"
            alt="Appointments"
          />
          <span>Idioma</span>
        </Link>
        <Link
          href={`/${rol}/${id}/payment-settings`}
          className="flex items-center"
        >
          <img
            className="w-[19px] h-[13px] mr-4"
            src="/settings/Vector.png"
            alt="Language"
          />
          <span>Configuración de pagos</span>
        </Link>
        <Link
          href={`/${rol}/${id}/change-password`}
          className="flex items-center"
        >
          <img
            className="w-[19px] h-[19px] mr-4"
            src="/settings/ph_key-thin.png"
            alt="Payments"
          />
          <span>Cambiar Contraseña</span>
        </Link>
        <Link href={`/${rol}/${id}/help-support`} className="flex items-center">
          <img
            className="w-[27px] h-[27px] mr-4"
            src="/settings/material-symbols-light_contact-support-outline.png"
            alt="Change Password"
          />
          <span>Ayuda y Soporte</span>
        </Link>
        <Link
          href={`/${rol}/${id}/delete-account`}
          className="flex items-center"
        >
          <img
            className="w-[19px] h-[19px] mr-4"
            src="/settings/Vector-Salir.png"
            alt="Delete Account"
          />
          <span>Cerrar la cuenta</span>
        </Link>
      </div>
      {/* Logout Button */}
      <div className="flex justify-center items-center ">
        <button
          onClick={handleLogout}
          className="w-[205px] h-[43px] bg-[#812B75] align-bottom text-[#F2F2F2] py-3 rounded-lg flex items-center justify-center"
        >
          <span className="font-bold ">Cerrar sesión</span>
        </button>
      </div>
    </div>
  );
};

export default SettingsPatient;
