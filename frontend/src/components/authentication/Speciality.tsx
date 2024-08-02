import Input from "@/components/Input";
import { LuUser2, LuMail, LuPhone, LuKey } from "react-icons/lu";
import { MdOutlineBadge } from "react-icons/md";
import { IoDocumentOutline } from "react-icons/io5";
import AuthField from "./ui/authField";

const Speciality = () => {
  return (
    <>
      <AuthField
        id="country-field"
        type="text"
        name="country"
        fieldTitle="Country"
        iconSrc="/assets/signup/world-form-icon.png"
        iconInputSrc={""}
        placeholder=""
      />
      <div className="signup-especiality flex w-full gap-4 items-center mb-6">
        <div className="w-1/2">
          <div className="signup-label flex items-center gap-1 mb-3 justify-start">
            <MdOutlineBadge />
            <label htmlFor="speciality">Especialidad</label>
          </div>
          <select
            className="bg-transparent border-b-2 border-[#35799F] appearance-none focus:outline-none py-2 px-3 w-full"
            // w-full bg-transparent border-b-2 border-[#35799F] appearance-none focus:outline-none
            name="speciality"
            id="speciality"
          >
            <option disabled value=""></option>
            <option value="Cardiology">Cardiology</option>
            <option value="Dermatology">Dermatology</option>
            <option value="Endocrinology">Endocrinology</option>
          </select>
        </div>
        <div className="w-1/2">
          <div className="signup-label flex items-center gap-1 mb-3 justify-start">
            <IoDocumentOutline />
            <label htmlFor="professionalCertificates" className="text-xs">
              URL del Certificado Profesional
            </label>
          </div>
          <Input
            type="text"
            id="professionalCertificates"
            name="professionalCertificates"
            twClass="bg-gray-300 py-2 px-3 rounded-lg w-full"
          />
        </div>
      </div>
    </>
  );
};

export default Speciality;
