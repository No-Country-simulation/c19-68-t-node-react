"use client";

import Link from "next/link";
import Speciality from "./Speciality";
import { useState } from "react";
import { signup, signupPatient } from "@/utils/actions";
import { useFormState } from "react-dom";
import AuthField from "./ui/authField";
import AuthGenderField from "./ui/authGenderField";
import PhoneNumberInput from "./ui/authPhoneField";
import CompleteDataModal from "./completeDataModal";

const SignupForm = ({ role }: { role: string }) => {
  const [state, formAction] = useFormState<any, FormData>(
    role == "doctor" ? signup : signupPatient,
    undefined
  );
  const [phone, setPhone] = useState("");

  console.log("Lo que va trayendo el state: ", state);

  return (
    <div className="signup-container w-full h-screen pb-10 px-5 flex flex-col ">
      {/* Sign Up Form */}
      <div className="signup-form w-full ">
        <form action={formAction} className="flex flex-col ">
          {/* firstname field */}
          <AuthField
            id="firstName"
            type="text"
            name="firstName"
            fieldTitle="FullName"
            iconSrc="/assets/login/icon-login-type.png"
            iconInputSrc={""}
            placeholder=""
          />
          {state?.errors?.firstName && (
            <p className="text-red-600">{state.errors.firstName}</p>
          )}

          {/* Lastname field */}
          <AuthField
            id="lastName"
            type="text"
            name="lastName"
            fieldTitle="LastName"
            iconSrc="/assets/login/icon-login-type.png"
            iconInputSrc={""}
            placeholder=""
          />
          {state?.errors?.lastName && (
            <p className="text-red-600">{state.errors.lastName}</p>
          )}

          {/* Gender field */}
          <AuthGenderField />
          {state?.errors?.gender && (
            <p className="text-red-600">{state.errors.gender}</p>
          )}

          {/* Email and phone field */}
          <div className="w-full flex h-[6rem] gap-2 mb-3">
            <div className="w-[32rem]">
              <AuthField
                id="email"
                type="email"
                name="email"
                fieldTitle="Email"
                iconSrc="/assets/signup/email-input-icon-2.png"
                iconInputSrc={""}
                placeholder=""
              />
              {state?.errors?.email && (
                <p className="text-red-600">{state.errors.email}</p>
              )}
            </div>

            <div className=" h-full flex ">
              <PhoneNumberInput
                value={phone}
                onChange={setPhone}
                name="phone"
              />
              {state?.errors?.phone && (
                <p className="text-red-600">{state.errors.phone}</p>
              )}
            </div>
          </div>

          {role === "doctor" ? <Speciality /> : null}

          <AuthField
            id="password"
            type="password"
            name="password"
            fieldTitle="Password"
            iconSrc="/assets/login/icon-login-password.png"
            iconInputSrc={"/assets/login/password-input-icon.png"}
            placeholder={" ******* "}
          />
          {state?.errors?.password && (
            <p className="text-red-600">{state.errors.password}</p>
          )}

          <AuthField
            id="repassword"
            type="password"
            name="repassword"
            fieldTitle="Repeat Password"
            iconSrc="/assets/login/icon-login-password.png"
            iconInputSrc={"/assets/login/password-input-icon.png"}
            placeholder={" ******* "}
          />
          {state?.errors?.repassword && (
            <p className="text-red-600">{state.errors.repassword}</p>
          )}

          <div className="flex items-center mb-6">
            <input type="checkbox" id="terms" name="terms" className="mr-2" />
            <label htmlFor="terms">I accept terms and conditions</label>
          </div>
          {state?.errors?.terms && (
            <p className="text-red-600">{state.errors.terms}</p>
          )}

          <div className="flex items-center mb-6">
            <input type="checkbox" id="human" name="human" className="mr-2" />
            <label htmlFor="human">Confirm that you are human</label>
          </div>
          {state?.errors?.human && (
            <p className="text-red-600">{state.errors.human}</p>
          )}

          <button
            type="submit"
            className="bg-gray-800 text-white py-2 rounded-lg"
          >
            Continue
          </button>
        </form>
      </div>

      {/* Login Redirect */}
      <div className="signup-footer-login w-full h-16 flex pt-10  gap-2">
        <p>¿Ya tienes una cuenta?</p>
        <Link className="text-blue-700 underline" href="/auth/login">
          Inicia sesión
        </Link>
      </div>
    </div>
  );
};

export default SignupForm;
