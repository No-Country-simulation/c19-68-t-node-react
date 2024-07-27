import React from "react";

interface Props {
  type: string;
  id?: string;
  name?: string;
  twClass?: string;
  multiple?: boolean;
  onChange?: void;
}

const Input = ({ type, id, name, twClass }: Props) => {
  return (
    <input
      className={`border-b border-solid pt-1 bg-transparent border-[#35799F] px-2 ${twClass}`}
      type={type}
      id={id}
      name={name}
    />
  );
};

export default Input;
