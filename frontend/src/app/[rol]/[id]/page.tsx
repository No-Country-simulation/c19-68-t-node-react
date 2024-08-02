import HomeDoctor from "@/components/Home/HomeDoctor";
import HomePatient from "@/components/Home/HomePatient";
import Image from "next/image";

const HomePage = ({ params }: { params: { rol: string; id: string } }) => {
  return (
    <section>
      {params.rol === "paciente" ? (
        <HomePatient patientId={params.id}/>
      ) : (
        <HomeDoctor doctorId={params.id} />
      )}
    </section>
  );
};

export default HomePage;
