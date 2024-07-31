import SettingsDoctor from "@/components/Settings/doctor/page";
import SettingsPatient from "@/components/Settings/patient/SettingsPatient";
import React from "react";

const SettingsPage = ({ params }: { params: { rol: string; id: string } }) => {
  return (
    <section>
      {params.rol === "paciente" ? <SettingsPatient /> : <SettingsDoctor />}
    </section>
  );
};

export default SettingsPage;
