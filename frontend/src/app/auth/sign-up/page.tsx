"use client";

import SignupForm from "@/components/authentication/signupForm";
import Image from "next/image";
import { SetStateAction, useState } from "react";
import { IoArrowBackOutline } from "react-icons/io5";

const SignUp = () => {
  const [role, setRole] = useState("");
  const [step, setStep] = useState(1);

  const handleRoleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setRole(event.target.value);
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };
  return (
    <div className="signup-page w-full h-full p-8 pt-0">
      {step === 1 && (
        <>
          <h1 className="flex justify-center font-bold text-[1.2rem] pb-5">
            Elije tu rol
          </h1>
          <div className="role-select-section w-full p-5 flex flex-col gap-12">
            {/* Paciente */}
            <label className="flex justify-between items-center cursor-pointer">
              <div className="flex items-center gap-2 peer-checked:text-red-500">
                <Image
                  src="/assets/signup/patient-role-icon.png"
                  width={25}
                  height={25}
                  alt="patient-role-icon"
                />
                <p>Paciente</p>
              </div>
              <input
                type="radio"
                name="role"
                value="paciente"
                className="peer hidden"
                checked={role === "paciente"}
                onChange={handleRoleChange}
              />
              <div className="w-4 h-4 border-2 border-gray-300 rounded-full peer-checked:border-white peer-checked:bg-[#1e435b]"></div>
            </label>
            {/* Profesional */}
            <label className="flex justify-between items-center cursor-pointer">
              <div className="flex items-center gap-2 peer-checked:text-red-500">
                <Image
                  src="/assets/signup/doctor-role-icon.png"
                  width={25}
                  height={25}
                  alt="professional-role-icon"
                />
                <p>Profesional</p>
              </div>
              <input
                type="radio"
                name="role"
                value="doctor"
                className="peer hidden"
                checked={role === "doctor"}
                onChange={handleRoleChange}
              />
              <div className="w-4 h-4 border-2 border-gray-300 rounded-full peer-checked:border-white peer-checked:bg-[#1e435b]"></div>
            </label>
          </div>
          <div className="w-full flex justify-center pt-40 pb-10">
            <button
              onClick={handleNextStep}
              className=" mt-4 bg-[#812B75] text-[#F2F2F2] text-sm py-2 px-12 rounded-2xl flex justify-center"
            >
              Continuar
            </button>
          </div>
        </>
      )}
      {step === 2 && (
        <div>
          <SignupForm role={role} />
          <div className="absolute top-10 left-10">
            <button onClick={() => setStep(step - 1)}>
              <IoArrowBackOutline className="text-[#35799f] text-2xl" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;
