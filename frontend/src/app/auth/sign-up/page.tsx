"use client";
import Input from "@/components/Input";
import { LuUser2, LuMail, LuPhone, LuKey } from "react-icons/lu";
import { MdOutlineBadge } from "react-icons/md";
import { IoDocumentOutline } from "react-icons/io5";
import Link from "next/link";
import Speciality from "./Speciality";
import { useState } from "react";

const SignUp = () => {
  const [rol, setRol] = useState("doctor");
  return (
    <div className="signup-container w-full h-screen p-10 flex flex-col ">
      {/* Sign Up Header */}
      {/* <div className="signup-header w-full p-10 mt-10 flex flex-col place-items-center">
        <h1 className="font-bold text-3xl mb-2">E-Medicine</h1>
        <h2 className="">Medicina integral en la comodidad de tu hogar</h2>
      </div> */}
      {/* Sign Up Form */}
      <div className="signup-form w-full ">
        <form action="" className="flex flex-col ">
          <div className="signup-label flex items-center gap-1 pl-5 mb-3 justify-start">
            <LuUser2 />
            <label htmlFor="firstName">FullName</label>
          </div>
          <Input type="text" id="firstName" name="firstName" twClass="mb-6" />

          <div className="signup-label flex items-center gap-1 pl-5 mb-3 justify-start">
            <LuUser2 />
            <label htmlFor="lastName">LastName</label>
          </div>
          <Input type="text" id="lastName" name="lastName" twClass="mb-6" />

          <div className="signup-label flex items-center gap-1 pl-5 mb-3 justify-start">
            <MdOutlineBadge />
            <label htmlFor="country">Country</label>
          </div>
          <Input type="text" id="country" name="country" twClass="mb-6" />

          <div className="signup-label flex items-center gap-1 pl-5 mb-3 justify-start">
            <LuPhone />
            <label htmlFor="phone">Phone Number</label>
          </div>
          <Input type="tel" id="phone" name="phone" twClass="mb-6" />

          <div className="signup-label flex items-center gap-1 pl-5 mb-3 justify-start">
            <LuMail />
            <label htmlFor="email">E-mail</label>
          </div>
          <Input type="email" id="email" name="email" twClass="mb-6" />

          {rol === "doctor" ? (
            <Speciality />
          ) : (
            <div className="flex gap-4 justify-between">
              {/* born date */}
              <div className="signup-label flex items-center gap-1 pl-5 mb-3 justify-center">
                <LuUser2 />
                <label htmlFor="bornDate">Born Date</label>
              </div>
              <Input type="date" id="bornDate" name="bornDate" twClass="" />
            </div>
          )}

          <div className="signup-label flex items-center gap-1 pl-5 mb-3 mt-4 justify-start">
            <LuKey />
            <label htmlFor="password">Password</label>
          </div>
          <Input type="password" id="password" name="password" twClass="mb-6" />

          <div className="signup-label flex items-center gap-1 pl-5 mb-3 justify-start">
            <LuKey />
            <label htmlFor="repeatPassword">Repeat Password</label>
          </div>
          <Input
            type="password"
            id="repeatPassword"
            name="repeatPassword"
            twClass="mb-6"
          />

          <div className="flex items-center mb-6">
            <input type="checkbox" id="terms" name="terms" className="mr-2" />
            <label htmlFor="terms">I accept terms and conditions</label>
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

export default SignUp;
