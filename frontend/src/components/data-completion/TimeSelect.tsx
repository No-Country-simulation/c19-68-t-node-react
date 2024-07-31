import React, { useState } from "react";

const TimeSelect = ({
  title,
  onChange,
  timeType,
}: {
  title: string;
  onChange: (name: string, value: string) => void;
  timeType: "start" | "end";
}) => {
  const [time, setTime] = useState({ hours: "8", minutes: "00", ampm: "AM" });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTime((prev) => {
      const newTime = { ...prev, [name]: value };
      onChange(
        timeType === "start" ? `start` : `end`,
        `${newTime.hours}:${newTime.minutes}`
      );
      return newTime;
    });
  };

  return (
    <div className="p-2 w-40 bg-transparent rounded-lg shadow-xl flex gap-3">
      <span>{title}</span>
      <div className="flex gap-2">
        <select
          name="hours"
          value={time.hours}
          onChange={handleChange}
          className="bg-transparent text-xs appearance-none outline-none"
        >
          {Array.from(Array(12).keys()).map((i) => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
        <span className="text-xs mr-3">:</span>
        <select
          name="minutes"
          value={time.minutes}
          onChange={handleChange}
          className="bg-transparent text-xs appearance-none outline-none mr-4"
        >
          {[0, 15, 30, 45].map((m) => (
            <option key={m} value={m < 10 ? `0${m}` : m}>
              {m < 10 ? `0${m}` : m}
            </option>
          ))}
        </select>
        <select
          name="ampm"
          value={time.ampm}
          onChange={handleChange}
          className="bg-transparent text-xs appearance-none outline-none"
        >
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select>
      </div>
    </div>
  );
};

export default TimeSelect;
