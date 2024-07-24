"use client";

import Link from "next/link";
import { login } from "@/utils/actions";
import { useFormState } from "react-dom";
import AuthField from "./ui/authField";
import Image from "next/image";

const LoginForm = () => {
  const [state, formAction] = useFormState<any, FormData>(login, undefined);

  console.log("Lo que trae state: ", state);

  return (
    <div className="login-container overflow-hidden w-[80%] h-full flex flex-col items-center bg-white px-4">
      {/* Login Form */}
      <div className="login-form w-full max-w-[400px] bg-white  rounded-lg ">
        <form action={formAction} className="flex flex-col">
          {/* Email field */}
          <AuthField
            id="email-field"
            type="email"
            name="email"
            fieldTitle="Email address"
            iconSrc="/assets/login/icon-login-type.png"
            iconInputSrc={"/assets/login/email-input-icon.png"}
            placeholder={"pepitoperez@email.com"}
          />
          {state?.errors.email && (
            <p className="text-red-500 text-balance">{state.errors.email}</p>
          )}
          {/* Password field */}
          <AuthField
            id="password-field"
            type="password"
            name="password"
            fieldTitle="Password"
            iconSrc="/assets/login/icon-login-password.png"
            iconInputSrc={"/assets/login/password-input-icon.png"}
            placeholder={" ******* "}
          />
          {state?.errors.password && (
            <p className="text-red-500 text-balance">{state.errors.password}</p>
          )}
          <div>
            <Link
              href="/auth/forgot-password"
              className="block text-center m-5"
            >
              Did you forgot the password?
            </Link>
            {/* Captcha field */}
            <div className=" flex justify-between items-center border-2 p-4 m-3 rounded-xl">
              <div className="flex gap-3">
                <input type="checkbox" className="w-6 " />
                <span className="font-bold">No soy un robot</span>
              </div>
              <Image
                src="/assets/login/captcha-logo-2.png"
                width={56}
                height={56}
                alt="catpcha-icon"
              />
            </div>

            {/* User have not an account */}
            {/* Registration */}
            <div className="login-footer-signup w-full flex pt-2 gap-2 justify-center">
              <p>No tienes una cuenta?</p>
              <Link className="text-[#812B75] underline" href="/auth/sign-up">
                Regístrate
              </Link>
            </div>
          </div>
          <button
            type="submit"
            className="bg-[#812B75] w-[205px] self-center text-white py-2 rounded-lg hover:bg-gray-500 transition mt-20"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
