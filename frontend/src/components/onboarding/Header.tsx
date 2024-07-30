import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="h-[245px] flex items-end">
      <ul>
        <li className="text-[20px] font-bold">Te damos la bienvenidas</li>
        <li className="flex items-center justify-center gap-1 text-[32px] font-bold gradient"> 
            <Image
            src={'/logo.png'}
            width={33}
            height={27}
            alt="logo"
            />
            E-Medicine
        </li>
      </ul>
    </header>
  );
};

export default Header;
