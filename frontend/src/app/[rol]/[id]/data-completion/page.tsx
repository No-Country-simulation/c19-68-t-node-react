import DataCompletionDoctor from "@/components/data-completion/DataCompletionDoctor";
import DataCompletionPatient from "@/components/data-completion/DataCompletionPatient";
import React from "react";

const page = ({ params }: { params: { id: string; rol: string } }) => {
  console.log("El dato del params: ", params.rol);
  const userId = params.id;
  return (
    <section>
      {params.rol === "paciente" ? (
        <DataCompletionPatient id={userId} />
      ) : (
        <DataCompletionDoctor />
      )}
    </section>
  );
};

export default page;
