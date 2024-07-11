"use client";

import { useState } from "react";

const AgendarTurno = () => {
  const [data, setData] = useState({});

  return (
    <section className="w-full h-screen bg-[#FFF] flex flex-col gap-3 p-6">
      <h1 className="text-3xl font-bold mb-4">Agenda</h1>
      <div className="filtro-especialidad mb-4">
        <h2 className="text-xl font-semibold mb-2">Especialidad</h2>
        <div className="relative">
          <select
            aria-placeholder="Selecione especialidad"
            className="w-full border-2 border-gray-300 rounded-md shadow-inner focus:outline-none focus:border-teal-500 p-2"
          >
            <option value="">Seleccione especialidad</option>
            <option value="cardiologia">Cardiología</option>
            <option value="traumatologia">Traumatología</option>
            <option value="neurologia">Neurología</option>
          </select>
        </div>
      </div>
      <div className="profesionales-disponibles mb-4">
        <h2 className="text-xl font-semibold mb-2">
          Profesionales Disponibles
        </h2>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 p-2 border border-gray-300 rounded-md">
            <div className="bg-gray-200 w-8 h-8 rounded-full"></div>
            <div className="flex-1">
              <div className="flex justify-between">
                <span className="font-semibold">Nombre del profesional</span>
                <div className="flex gap-1">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
              </div>
            </div>
            <input type="checkbox" className="form-checkbox" />
          </div>
          <div className="flex items-center gap-2 p-2 border border-gray-300 rounded-md">
            <div className="bg-gray-200 w-8 h-8 rounded-full"></div>
            <div className="flex-1">
              <div className="flex justify-between">
                <span className="font-semibold">Nombre del profesional</span>
                <div className="flex gap-1">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
              </div>
            </div>
            <input type="checkbox" className="form-checkbox" />
          </div>
        </div>
      </div>
      <div className="fechas-disponibles mb-4">
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
      </button>
    </section>
  );
};

export default AgendarTurno;
