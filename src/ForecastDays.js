import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDays(props) {
  function maxTemprature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }

  function minTemprature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return days[day];
  }

  return (
    <div>
      <ul className="five-days">
        <li className="day">
          <h3>{day()}</h3>
        </li>
        <li className="weather">{props.data.weather[0].description}</li>
        <li className="icons">
          <WeatherIcon code={props.data.weather[0].icon} size={80} />
        </li>
        <li className="temperature">
          <span className="maxTemperature">{maxTemprature()}</span>
          °/
          <span className="minTemperature">{minTemprature()}</span>°
        </li>
      </ul>
    </div>
  );
}
