import React from "react";

export default function FormatDay(props) {
  let months = [
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
  let dates = props.date.getDate();
  if (dates < 10) {
    dates = `0${dates}`;
  }

  let month = months[props.date.getMonth()];
  let year = props.date.getFullYear();

  return (
    <div>
      {dates} {month} {year}
    </div>
  );
}
