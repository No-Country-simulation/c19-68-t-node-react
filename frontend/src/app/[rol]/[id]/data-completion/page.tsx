"use client";
import CompleteDataModal from "@/components/authentication/completeDataModal";
import DataCompletionDoctor from "@/components/data-completion/DataCompletionDoctor";
import DataCompletionPatient from "@/components/data-completion/DataCompletionPatient";
import React, { useState } from "react";
import DataComplet from "./dataComplet";

const page = ({ params }: { params: { id: string; rol: string } }) => {
  const userId = params.id;
  return (
    <section className="w-full">
      <DataComplet id={userId} rol={params.rol} />
    </section>
  );
};

export default page;
