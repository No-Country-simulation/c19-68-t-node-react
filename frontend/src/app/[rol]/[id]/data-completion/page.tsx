"use client";
import CompleteDataModal from "@/components/authentication/completeDataModal";
import DataCompletionDoctor from "@/components/data-completion/DataCompletionDoctor";
import DataCompletionPatient from "@/components/data-completion/DataCompletionPatient";
import React, { useState } from "react";

const page = ({ params }: { params: { id: string; rol: string } }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const userId = params.id;
  return (
    <section className="w-full">
      {isModalOpen && (
        <CompleteDataModal
          isOpen={isModalOpen}
          role={params.rol}
          onClose={() => setIsModalOpen(false)}
          userId={userId}
        />
      )}
      {params.rol === "paciente" ? (
        <DataCompletionPatient id={userId} />
      ) : (
        <DataCompletionDoctor doctorId={userId} />
      )}
    </section>
  );
};

export default page;
