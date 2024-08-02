import React from "react";

interface Option {
  value: string | number;
  label: string;
  endTime?: string;
}

interface CustomSelectProps {
  title: string;
  name: string;
  options: Option[];
  onSelect: (value: string) => void;
  horarios?: boolean;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  title,
  name,
  options,
  onSelect,
  horarios,
}) => {
  return (
    <div className="w-full">
      <h4 className="text-gray-700 mb-1">{title}</h4>
      <div className="relative">
        <select
          name={name}
          aria-placeholder={`Seleccione ${title.toLowerCase()}`}
          className="w-full bg-transparent border-b-2 border-[#35799F] appearance-none focus:outline-none focus:border-teal-500 p-2"
          onChange={(e) => onSelect(e.target.value)}
        >
          <option value=""></option>
          {options.map((option) => (
            <option
              key={option.endTime}
              value={
                horarios
                  ? [option.value, option.endTime].toString()
                  : option.value.toString()
              }
            >
              {option.label} {option.endTime ? `- ${option.endTime}` : ""}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 rotate-180"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 01.707.293l7 7a1 1 0 01-1.414 1.414L10 5.414l-6.293 6.293a1 1 0 01-1.414-1.414l7-7A1 1 0 0110 3z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CustomSelect;
