"use client";

import { useState } from "react";
import First from "./First";
import Secound from "./Secound";
import Finaly from "./Finaly";
import { useRouter } from "next/navigation";
import Header from "./Header";

const page = () => {
  const [counter, setCounter] = useState<number>(1);

  const router = useRouter()
    const handleClick = () => {
        setCounter( counter + 1)

        if(counter >= 4) {
            router.push('/auth/sign-up')
        }
    }

  return (
    <section className="h-screen w-screen bg-[#FAFAFA]">
      <div className="h-[90%] w-full flex flex-col items-center">
        <Header/>
        
        <div>{
            counter <= 1 ? <First/> 
            : counter <= 2 ? <Secound/>
            :counter >=  3 ? <Finaly/> : counter
        }</div>

        <button className="w-[205px] h-[43px] bg-[#35799F] rounded-[14px] text-[#F2F2F2] font-bold" onClick={handleClick} >
           Continuar  
        </button>
        </div>
    </section>
  );
};

export default page;
