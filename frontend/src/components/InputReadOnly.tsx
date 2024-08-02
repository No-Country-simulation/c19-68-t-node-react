import React from "react";

interface Props {
  type: string;
  id?: string;
  name?: string;
  value?: string | number;
  twClass?: string;
  multiple?: boolean;
  onChange?: void;
}

const InputReadOnly = ({ type, id, name, twClass, value }: Props) => {
  return (
    <input
      className={`border-b border-solid pt-1 bg-transparent border-[#35799F] px-2 ${twClass}`}
      value={value}
      type={type}
      id={id}
      name={name}
      readOnly
    />
  );
};

export default InputReadOnly;
