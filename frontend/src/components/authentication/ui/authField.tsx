import Image from "next/image";
import React from "react";

interface AuhtFieldProps {
  type: string;
  fieldTitle: string;
  id?: string;
  name?: string;
  iconSrc: string;
  iconInputSrc: string;
  placeholder: string;
}

const AuthField = ({
  type,
  id,
  name,
  fieldTitle,
  iconSrc = "",
  iconInputSrc = "",
  placeholder = "",
}: AuhtFieldProps) => {
  return (
    <div className="w-full py-5">
      {/* Header Field */}
      <div className="flex gap-3 align-bottom">
        <Image src={iconSrc} width={35} height={38} alt={fieldTitle} />
        <h3 className="text-sm h-fit self-end mb-1">{fieldTitle}</h3>
      </div>
      {/* Input field */}
      <div className="relative w-full">
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          id={id}
          className="w-full h-[45px] pl-4 pr-10 border-b-2 border-[#89bad8] focus:outline-none focus:border-[#35799f]"
        />
        {iconInputSrc && (
          <Image
            src={iconInputSrc}
            width={24}
            height={24}
            alt={fieldTitle}
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
          />
        )}
      </div>
    </div>
  );
};

export default AuthField;
