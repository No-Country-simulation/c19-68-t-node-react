import AcivityDoctor from "@/components/actividad/ActivityDoctor";
import ActivityPatient from "@/components/actividad/ActivityPatient";
import React from "react";

const ActivityPage = ({ params }: { params: { rol: string; id: string } }) => {
  return (
    <section>
      {params.rol === "paciente" ? <ActivityPatient /> : <AcivityDoctor />}
    </section>
  );
};

export default ActivityPage;
