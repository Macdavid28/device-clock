import React, { useState, useEffect } from "react";
import "./clock.css";
const Clock = () => {
  const [time, setTime] = useState(getTime());

  function getTime() {
    const now = new Date();
    const hours = now.getHours() % 12 || 12;
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    return { hours, minutes, seconds };
  }

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
  let monthArray = new Date().getMonth();
  let monthName = monthNames[monthArray];

  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const getDay = new Date();
  const day = getDay.getDay();
  const date = getDay.getDate();
  const getYear = new Date();
  const theYear = getYear.getFullYear();
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(getTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="clock">
      <div className="watch">
        <h1 className="date">
          <span className="date-span"> {date}</span> {dayNames[day]} /{" "}
          {monthName} / {theYear}
        </h1>
        <h1 className="time">
          {time.hours} : {time.minutes} :- {time.seconds}
        </h1>
      </div>
    </div>
  );
};

export default Clock;
