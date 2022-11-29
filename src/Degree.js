import React, { useState } from "react";
import "./Degree.css";

export default function Degree(props) {
  const [temperature, setTemperature] = useState(props.temperature);

  function showFahrenheit(event) {
    event.preventDefault();
    setTemperature(Math.round((props.temperature * 9) / 5) + 32);
  }

  function showCelsius(event) {
    event.preventDefault();
    setTemperature(props.temperature);
  }

  return (
    <div className="weather-temperature">
      <h1>{props.city}</h1>
      <h2>
        <span>{temperature}</span>
        <span>
          <a href="/" className="active" onClick={showCelsius}>
            °C
          </a>
          /
          <a href="/" className="active" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </h2>
    </div>
  );
}
