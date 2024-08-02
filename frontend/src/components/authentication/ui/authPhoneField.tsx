"use client";
import Image from "next/image";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const PhoneNumberInput = ({
  value,
  onChange,
  name,
}: {
  value: any;
  onChange: any;
  name: any;
}) => {
  return (
    <div className="flex flex-col justify-between p-[0.38rem] w-[40vw]">
      <div className="flex items-center gap-1">
        <Image
          src="/assets/signup/phone-input-icon.png"
          width={20}
          height={20}
          alt="phone-icon"
        />
        <p>Phone Number</p>
      </div>
      <PhoneInput
        international
        defaultCountry="US"
        value={value}
        onChange={onChange}
        name={name}
        className=" w-[130px] bg-transparent  border-b-[1px] border-[#35799f]"
      />
    </div>
  );
};

export default PhoneNumberInput;
