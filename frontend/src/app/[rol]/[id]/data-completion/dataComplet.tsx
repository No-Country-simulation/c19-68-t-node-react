"use client";
import CompleteDataModal from "@/components/authentication/completeDataModal";
import DataCompletionDoctor from "@/components/data-completion/DataCompletionDoctor";
import DataCompletionPatient from "@/components/data-completion/DataCompletionPatient";
import React, { useState } from "react";

const DataComplet = ({ id, rol }: { id: string; rol: string }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <section className="w-full">
      {isModalOpen && (
        <CompleteDataModal
          isOpen={true}
          role={rol}
          onClose={() => setIsModalOpen(false)}
          userId={id}
        />
      )}
      {rol === "paciente" ? (
        <DataCompletionPatient id={id} />
      ) : (
        <DataCompletionDoctor doctorId={id} />
      )}
    </section>
  );
};

export default DataComplet;
