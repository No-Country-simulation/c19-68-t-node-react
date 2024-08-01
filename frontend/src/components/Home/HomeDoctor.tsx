"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import DateTimeDisplay from "./DateTimeDisplay";
import AppointmentsTable from "./AppointmentTable";

interface AppointmentData {
  _id: string;
  patient_id: string;
  doctor_id: string;
  date: string;
  startTime: string;
  endTime: string;
  state: string;
  video_call_link: string;
  reasons: string;
  notes: string;
}

interface ApiResponse {
  doctorInfoDate: AppointmentData[];
}

const HomeDoctor = ({ doctorId }: { doctorId: string }) => {
  const [doctor, setDoctor] = useState(doctorId);
  const [appointmentsData, setAppointmentsData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:8080/appointments/getAppoDoc/${doctorId}/2024-07-31`, {
          credentials: 'include'
        });
        if (!response.ok) {
          throw new Error('Error fetching appointments');
        }
        const data: ApiResponse = await response.json();
        console.log(data);
        setAppointmentsData(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, [doctorId]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4 md:p-8">
      {/* Header */}
      <div className="flex items-center w-full justify-between mb-4">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-gray-300 rounded-full p-2">
            <Image width={24} height={24} src="/usuario.png" alt="Avatar" />
          </div>
          <div className="flex flex-col p-0">
            <span className="font-semibold">Pepito Perez</span>
            <span className="text-xs">Pedagogía</span>
          </div>
        </div>
      </div>
      {/* Componente Fecha */}
      <DateTimeDisplay />
      <p className="font-semibold text-lg">Citas Programadas Para Hoy</p>
      {/*Componente AppointmentTable */}
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : appointmentsData ? (
        <AppointmentsTable data={appointmentsData} />
      ) : (
        <p>No hay datos de citas disponibles.</p>
      )}
      <button className="bg-purple-800 px-4 py-2 text-white font-bold border rounded-md mt-10">Consultar Agenda</button>
    </div>
  );
};

export default HomeDoctor;