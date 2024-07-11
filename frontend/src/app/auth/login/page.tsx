import Input from "@/components/Input";
import { LuUser2 } from "react-icons/lu";
import { IoKeyOutline } from "react-icons/io5";
import Link from "next/link";

const Login = () => {
  return (
    <div className="login-container w-full h-screen p-10 flex flex-col ">
      {/* Login Header */}
      <div className="login-header w-full p-10 mt-10 flex flex-col place-items-center">
        <h1 className="font-bold text-3xl mb-2">E-Medicine</h1>
        <h2 className="">Comprehensive medicine in comfort of your home</h2>
      </div>
      {/* Login Form */}
      <div className="login-form w-full ">
        <form action="" className="flex flex-col ">
          <div className="login-label flex items-center gap-1 pl-5 mb-3 justify-start">
            <LuUser2 />
            <label htmlFor="email">Email Address</label>
          </div>
          <Input type="email" id="email" name="email" twClass="mb-6" />

          <div className="login-label flex items-center gap-1 pl-5 mb-3 justify-start">
            <IoKeyOutline className="rotate-180" />
            <label htmlFor="email">Password</label>
          </div>
          <Input type="email" id="email" name="email" twClass="mb-8" />

          <button
            type="submit"
            className="bg-gray-800 text-white py-2 rounded-lg"
          >
            Login
          </button>
        </form>
      </div>

      {/* Forgot password */}
      <Link href="/auth/forgot-password">Did you forgot the password?</Link>

      {/* Registration */}
      <div className="login-footer-signup w-full flex pt-10 gap-2">
        <p>You don't have an account?</p>
        <Link className="text-blue-700 underline" href="/auth/sign-up">
          Sign up!
        </Link>
      </div>
    </div>
  );
};

export default Login;
