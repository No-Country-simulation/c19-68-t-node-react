import BallBackground from "@/components/ui/ballBackground";
import Image from "next/image";
import React from "react";

const AuthHeader = () => {
  return (
    <div className="flex w-full flex-col items-center h-[300px] justify-center overflow-hidden">
      {/* <BallBackground /> */}

      <div className="header-container">
        <div className="text-center">
          <div className="flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="E-medicine Logo"
              className="mx-3"
              width={24}
              height={24}
            />
            <h2 className="text-[1.8rem] font-bold">E-medicine</h2>
          </div>

          <div className="w-full h-[4px] mb-4 rounded-[200px] bg-gradient-to-r from-[#812B75] via-[#89BAD8] to-[#35799F]"></div>
        </div>

        <p className="text-gray-600 w-[260px] text-center">
          Medicina integral en la comodidad de tu hogar
        </p>
      </div>
    </div>
  );
};

export default AuthHeader;
