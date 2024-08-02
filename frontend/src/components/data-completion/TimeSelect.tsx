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
    <div className="p-1 w-[155px] flex border-b-[1px] border-[#35799f] gap-3">
      <span>{title}</span>
      <TimePicker
        onChange={handleChange}
        value={time}
        format="hh a"
        disableClock={true}
        clearIcon={null}
        className="w-full text-sm bg-transparent"
      />
    </div>
  );
};

export default TimeSelect;
