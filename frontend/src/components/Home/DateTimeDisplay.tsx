"use client";
import { use, useEffect, useState } from "react";
import Calendar from "../Calendar";
import { string } from "zod";

const DateTimeDisplay = () => {
  const [dateTime, setDateTime] = useState({
    dayNumber: 0,
    dayName: "",
    month: "",
    year: 0,
    time: "",
  });

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const dayNumber = now.getDate();
      const dayNames = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const dayName = dayNames[now.getDay()];
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const month = monthNames[now.getMonth()];
      const year = now.getFullYear();
      const time = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });

      setDateTime({
        dayNumber,
        dayName,
        month,
        year,
        time,
      });
    };
    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  const calendar = [dateTime.dayName, "", "", dateTime.dayNumber];
  return (
    <div className="flex justify-evenly items-center min-w-80 max-w-[80%] mb-8">
      <Calendar
        sizeCalendar="w-[80px] h-[80px] text-[40px]"
        sizeDate="text-[13px]"
        sizeDay="text-[35px]"
        sizeMonthAndYear=" text-[13px]"
        calendar={calendar}
      />
      <div className="flex flex-col">
        <p className="text-3xl font-semibold">{dateTime.time}</p>
        <div className="flex justify-center gap-2">
          <p className="font-semibold">{dateTime.month}</p>
          <p className="font-semibold">{dateTime.year}</p>
        </div>
      </div>
    </div>
  );
};

export default DateTimeDisplay;
