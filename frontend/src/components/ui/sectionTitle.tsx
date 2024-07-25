import React from "react";

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className="w-fit text-start self-start ">
      <div className="flex items-center pr-4">
        <img src="/logo.png" alt="E-medicine Logo" className="mx-3" />
        <h3 className="text-[1.3rem] font-bold">{title}</h3>
      </div>

      <div className="w-full h-[4px] mb-4 rounded-[200px] bg-gradient-to-r from-[#812B75] via-[#89BAD8] to-[#35799F]"></div>
    </div>
  );
};

export default SectionTitle;
