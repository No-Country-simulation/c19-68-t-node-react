import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays, setHours, setMinutes } from "date-fns";

interface CalendarProps {
  // availableDates?: Date[];
  startDate: Date;
  endDate: Date;
  onDateSelect: (date: Date) => void;
}

const CustomCalendar: React.FC<CalendarProps> = ({
  // availableDates,
  onDateSelect,
  startDate,
  endDate,
}) => {
  // const isDateAvailable = (date: Date) => {
  //   return availableDates?.some(
  //     (availableDate) =>
  //       availableDate.getFullYear() === date.getFullYear() &&
  //       availableDate.getMonth() === date.getMonth() &&
  //       availableDate.getDate() === date.getDate()
  //   );
  // };

  return (
    <DatePicker
      selected={null}
      onChange={(date) => onDateSelect(date as Date)}
      minDate={startDate}
      maxDate={endDate}
      inline
      // highlightDates={availableDates}
      // dayClassName={(date) =>
      //   isDateAvailable(date) ? "available-date" : "unavailable-date"
      // }
      // filterDate={isDateAvailable}
      className="bg-slate-600"
    />
  );
};

export default CustomCalendar;
