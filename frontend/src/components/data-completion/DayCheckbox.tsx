import React, { useState } from "react";

const DayCheckbox = ({
  day,
  onChange,
}: {
  day: string;
  onChange: (day: string, checked: boolean) => void;
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    onChange(day, e.target.checked);
  };

  return (
    <div className="flex flex-col p-2 gap-2">
      <span>{day}</span>
      <input
        type="checkbox"
        value={day}
        checked={isChecked}
        onChange={handleChange}
        className="check"
      />
    </div>
  );
};

export default DayCheckbox;
