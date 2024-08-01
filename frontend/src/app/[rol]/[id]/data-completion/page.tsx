import DataCompletionDoctor from "@/components/data-completion/DataCompletionDoctor";
import DataCompletionPatient from "@/components/data-completion/DataCompletionPatient";
import React from "react";

const page = ({ params }: { params: { id: string; rol: string } }) => {
  console.log("El dato del params: ", params.rol);
  const userId = params.id;
  return (
    <section className="w-full">
      {params.rol === "paciente" ? (
        <DataCompletionPatient id={userId} />
      ) : (
        <DataCompletionDoctor doctorId={userId} />
      )}
    </section>
  );
};

export default page;
