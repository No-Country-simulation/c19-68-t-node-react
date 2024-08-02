import PatientAppointment from '@/components/program-date/PatientAppointment/PatientAppointment';
import React from 'react'

const page = ({ params }: { rol: string; id: string; params: any }) => {
  return (
    <section>{params.rol === "paciente" ? <PatientAppointment id={params.id} /> : null}</section>
  )
}

export default page