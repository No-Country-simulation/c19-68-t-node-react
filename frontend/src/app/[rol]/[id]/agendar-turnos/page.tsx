import AgendarTurno from "@/components/Agenda/agendarTurno";
import React from "react";

const AgendarTurnoPage = ({
  params,
}: {
  rol: string;
  id: string;
  params: any;
}) => {
  return <div>{params.rol === "paciente" ? <AgendarTurno /> : null}</div>;
};

export default AgendarTurnoPage;
