import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getDay, isBefore, startOfDay } from "date-fns";
import "./customCalendar.css";

interface CalendarProps {
  onDateSelect: (date: Date) => void;
  name: string;
  availableDays: string[];
}

const daysMap: { [key: string]: number } = {
  Sunday: 0,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6,
};

const CustomCalendar: React.FC<CalendarProps> = ({
  onDateSelect,
  name,
  availableDays,
}) => {
  const today = startOfDay(new Date());

  const filterDays = (date: Date) => {
    const day = getDay(date);
    const isDayAvailable = availableDays.some(
      (availableDay) => daysMap[availableDay] === day
    );
    return isDayAvailable && !isBefore(date, today);
  };

  return (
    <DatePicker
      selected={null}
      onChange={(date) => onDateSelect(date as Date)}
      inline
      minDate={today}
      name={name}
      filterDate={filterDays}
      className=""
    />
  );
};

export default CustomCalendar;
