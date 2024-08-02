"use client";
import Image from "next/image";
import React, { SetStateAction, useState } from "react";

const AuthGenderField = () => {
  const [gender, setGender] = useState("test");

  const handleGenderChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setGender(event.target.value);
  };

  console.log("gender: ", gender);

  return (
    <label htmlFor="gender" className="w-full flex justify-between py-5">
      <div className="flex gap-2 ">
        <Image
          src="/assets/signup/gender-icon.png"
          width={24}
          height={24}
          alt="gender-icon"
        />
        <span>Sexo</span>
      </div>
      <div className="flex gap-3 ">
        <label htmlFor="woman" className="flex items-center gap-1">
          <span>Mujer</span>
          <input
            className="radio"
            type="radio"
            name="gender"
            onChange={handleGenderChange}
            value="female"
          />
        </label>

        <label htmlFor="man" className="flex  items-center gap-1">
          <span>Hombre</span>
          <input
          className="radio"
            type="radio"
            name="gender"
            onChange={handleGenderChange}
            value="male"
          />
        </label>

        <label htmlFor="other" className="flex items-center gap-1">
          <span>Otro</span>
          <input
          className="radio"
            type="radio"
            name="gender"
            onChange={handleGenderChange}
            value="other"
          />
        </label>
      </div>
    </label>
  );
};

export default AuthGenderField;
