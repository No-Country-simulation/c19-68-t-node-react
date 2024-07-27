import React from "react";

const DayCheckbox = ({ day }: { day: string }) => {
  return (
    <div className="flex flex-col p-2 gap-2">
      <span>{day}</span>
      <input type="checkbox" />
    </div>
  );
};

export default DayCheckbox;
