import DataCompletionDoctor from "@/components/data-completion/DataCompletionDoctor";
import DataCompletionPatient from "@/components/data-completion/DataCompletionPatient";
import React from "react";

const page = ({ params }: { rol: string; id: string; params: any }) => {
  return (
    <section>{params.rol === "paciente" ? <DataCompletionPatient /> : <DataCompletionDoctor/>}</section>
  );
};

export default page;
