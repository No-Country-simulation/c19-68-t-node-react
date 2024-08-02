"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import DateTimeDisplay from "./DateTimeDisplay";

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

  return <></> ;
};

export default HomeDoctor;