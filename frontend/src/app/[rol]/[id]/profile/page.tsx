import ProfileDoctor from "@/components/profile/ProfileDoctor";
import ProfilePatient from "@/components/profile/ProfilePatient";
import React from "react";

const page = ({ params }: { params: { rol: string; id: string } }) => {
  return (
    <section>
      {params.rol === "paciente" ? <ProfilePatient id={params.id} /> : <ProfileDoctor id={params.id} />}
    </section>
  );
};

export default page;
