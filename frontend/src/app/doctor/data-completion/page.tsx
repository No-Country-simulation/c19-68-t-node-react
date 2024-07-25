import Input from "@/components/Input";
import SectionTitle from "@/components/ui/sectionTitle";
import Image from "next/image";

const DoctorDataCompletion = () => {
  return (
    <div className="h-screen bg-gray-100 flex flex-col items-center p-4 md:p-8 lg:w-full lg:grid lg:grid-cols-2">
      {/* Header */}

      <SectionTitle title="Mis datos medicos" />

      {/* Profile Picture */}
      <div className="w-full py-10 z-10 flex flex-col items-center lg:grid grid__profile">
        <div className="w-[122px] h-[122px] mt-9 bg-[#89BAD8] rounded-full flex items-center justify-center mb-2 lg:mb-0 lg:justify-self-center">
          <Image
            src="/lapiz-de-usuario.png"
            alt="Edit Photo"
            width={70}
            height={70}
            className="ml-4"
          />
        </div>

        <article className="hidden lg:block justify-self-center">
          <h3 className="font-bold text-[20px]">Informacion personal</h3>
          <ul className="grid grid-cols-3 text-[12px] grid-rows-3 gap-1">
            <li className="flex flex-col ">
              <span className="font-semibold">Nombre</span>Nombre
            </li>
            <li className="flex flex-col ">
              <span className="font-semibold">Apellido</span>Apellido
            </li>
            <li className="flex flex-col ">
              <span className="font-semibold">Telefono</span>Telefono
            </li>
            <li className="flex flex-col ">
              <span className="font-semibold">Email</span>Email
            </li>
            <li className="flex flex-col ">
              <span className="font-semibold">Pais</span>Pais
            </li>
            <li className="flex flex-col ">
              <span className="font-semibold">Ciudad</span>Ciudad
            </li>
            <li className="flex flex-col ">
              <span className="font-semibold">Cod Postal</span>Cod Postal
            </li>
          </ul>
        </article>
      </div>

      {/* Form */}
      <form className="flex flex-col gap-[26px] text-[12px] max-w-[325px]">
        {/* ID y Numero */}

        <button className="w-[70%] text-white rounded-lg bg-[#812B75] py-3 m-auto my-4">
          Continuar
        </button>
      </form>
    </div>
  );
};

export default DoctorDataCompletion;
