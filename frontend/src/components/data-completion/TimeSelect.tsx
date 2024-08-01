import React, { useState } from "react";
import TimePicker from "react-time-picker";

const TimeSelect = ({
  title,
  onChange,
  timeType,
}: {
  title: string;
  onChange: (name: string, value: string) => void;
  timeType: "start" | "end";
}) => {
  const [time, setTime] = useState("08:00");

  const handleChange = (value: string | null) => {
    if (value) {
      setTime(value);
      onChange(timeType, value);
    }
  };

  return (
    <div className="p-2 w-full bg-transparent rounded-lg shadow-xl flex flex-col gap-3">
      <span>{title}</span>
      <TimePicker
        onChange={handleChange}
        value={time}
        format="hh a"
        disableClock={true}
        clearIcon={null}
        className="w-full bg-transparent text-sm appearance-none outline-none"
      />
    </div>
  );
};

export default TimeSelect;
