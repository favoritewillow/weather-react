import React, { useState } from "react";
import "./Degree.css";

export default function Degree(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="Degree">
        <div className="weather-temperature">
          <h1>{props.cityName}</h1>
          <h2>
            <span>{Math.round(props.celsius)}</span>{" "}
            <span>
              °C /{" "}
              <a href="/" className="active" onClick={showFahrenheit}>
                °F
              </a>
            </span>
          </h2>
        </div>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="Degree">
        <div className="weather-temperature">
          <h1>{props.cityName}</h1>
          <h2>
            <span>{Math.round(fahrenheit)}</span>{" "}
            <span>
              <a href="/" className="active" onClick={showCelsius}>
                °C{" "}
              </a>
              / °F
            </span>
          </h2>
        </div>
      </div>
    );
  }
}
