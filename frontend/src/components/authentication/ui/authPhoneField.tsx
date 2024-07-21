"use client";
import Image from "next/image";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const PhoneNumberInput = ({ value, onChange }) => {
  return (
    <div className="flex flex-col justify-between p-[0.38rem] w-[40vw]">
      <div className="flex">
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
        className=" border-b-2 border-[#89bad8] focus:outline-none focus:border-[#35799f] "
      />
    </div>
  );
};

export default PhoneNumberInput;
