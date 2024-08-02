"use client";

import { useState } from "react";
import First from "@/components/onboarding/First";
import Secound from "@/components/onboarding/Secound";
import Finaly from "@/components/onboarding/Finaly";
import { useRouter } from "next/navigation";
import Header from "@/components/onboarding/Header";
import BallBackground from "../ui/ballBackground";

const Onboarding = () => {
  const [counter, setCounter] = useState<number>(1);

  const router = useRouter();
  const handleClick = () => {
    setCounter(counter + 1);

    if (counter >= 3) {
      router.push("/auth/login");
    }
  };

  return (
    <section className="h-screen w-screen bg-[#FAFAFA]">
      <BallBackground />
      <div className="h-[90%] w-full flex flex-col items-center">
        <Header />

        <div>
          {counter == 1 ? (
            <First />
          ) : counter == 2 ? (
            <Secound />
          ) : counter >= 3 ? (
            <Finaly />
          ) : (
            counter
          )}
        </div>

        <button
          className="w-[205px] h-[43px] bg-[#35799F] rounded-[14px] text-[#F2F2F2] font-bold"
          onClick={handleClick}
        >
          Continuar
        </button>
      </div>
    </section>
  );
};

export default Onboarding;
