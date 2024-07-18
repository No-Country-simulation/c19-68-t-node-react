"use client";

import Input from "@/components/Input";
import { LuUser2, LuMail, LuPhone, LuKey } from "react-icons/lu";
import { MdOutlineBadge } from "react-icons/md";
import { IoDocumentOutline } from "react-icons/io5";
import Link from "next/link";
import Speciality from "./Speciality";
import { useState } from "react";
import { signup } from "@/utils/actions";
import { useFormState } from "react-dom";
import AuthField from "./ui/authField";
import AuthGenderField from "./ui/authGenderField";
import PhoneInput from "react-phone-number-input/input";
import { E164Number } from "libphonenumber-js";
import PhoneNumberInput from "./ui/authPhoneField";

const SignupForm = ({ role }: { role: string }) => {
  const [state, formAction] = useFormState<any, FormData>(signup, undefined);
  const [phone, setPhone] = useState("");

  console.log("Lo que trae la data/state del signup: ", state);

  return (
    <div className="signup-container w-full h-screen pb-10 px-5 flex flex-col ">
      {/* Sign Up Header */}
      {/* <div className="signup-header w-full p-10 mt-10 flex flex-col place-items-center">
        <h1 className="font-bold text-3xl mb-2">E-Medicine</h1>
        <h2 className="">Medicina integral en la comodidad de tu hogar</h2>
      </div> */}
      {/* Sign Up Form */}
      <div className="signup-form w-full ">
        <form action={formAction} className="flex flex-col ">
          {/* fullname field */}
          <AuthField
            id="fullname-field"
            type="text"
            name="fullname"
            fieldTitle="FullName"
            iconSrc="/assets/login/icon-login-type.png"
            iconInputSrc={""}
            placeholder=""
          />
          {state?.errors?.fullName && <p>{state.errors.fullName}</p>}

          {/* Lastname field */}
          <AuthField
            id="lastname-field"
            type="text"
            name="lastname"
            fieldTitle="LastName"
            iconSrc="/assets/login/icon-login-type.png"
            iconInputSrc={""}
            placeholder=""
          />
          {/* Gender field */}
          <AuthGenderField />

          {/* Email and phone field */}

          <div className="w-full flex h-[6rem] gap-2 mb-3">
            <div className="w-[32rem]">
              <AuthField
                id="email-field"
                type="text"
                name="lastname"
                fieldTitle="Email"
                iconSrc="/assets/signup/email-input-icon-2.png"
                iconInputSrc={""}
                placeholder=""
              />
            </div>

            <div className=" h-full flex ">
              <PhoneNumberInput value={phone} onChange={setPhone} />
            </div>
          </div>

          {role === "professional" ? <Speciality /> : null}

          <AuthField
            id="password-field"
            type="password"
            name="password"
            fieldTitle="Password"
            iconSrc="/assets/login/icon-login-password.png"
            iconInputSrc={"/assets/login/password-input-icon.png"}
            placeholder={" ******* "}
          />

          <AuthField
            id="repeat-password-field"
            type="password"
            name="repeat-password"
            fieldTitle="Repeat Password"
            iconSrc="/assets/login/icon-login-password.png"
            iconInputSrc={"/assets/login/password-input-icon.png"}
            placeholder={" ******* "}
          />

          <div className="flex items-center mb-6">
            <input type="checkbox" id="terms" name="terms" className="mr-2" />
            <label htmlFor="terms">I accept terms and conditions</label>
          </div>

          <div className="flex items-center mb-6">
            <input type="checkbox" id="terms" name="terms" className="mr-2" />
            <label htmlFor="terms">Comfirm that you are human</label>
          </div>

          <button
            type="submit"
            className="bg-gray-800 text-white py-2 rounded-lg"
          >
            Continue
          </button>
        </form>
      </div>

      {/* Login Redirect */}
      <div className="signup-footer-login w-full flex pt-10 gap-2">
        <p>¿Ya tienes una cuenta?</p>
        <Link className="text-blue-700 underline" href="/auth/login">
          Inicia sesión
        </Link>
      </div>
    </div>
  );
};

export default SignupForm;
