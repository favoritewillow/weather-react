import React from "react";
//import axios from "axios";
import "./Forecast.css";
import Degree from "./Degree";

export default function Forecast() {
  let forecastData = {
    city: "Kyiv",
    temperature: 19,
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    description: "Cloudy",
    date: "Tuesday 10:00" /*last update*/,
    humidity: 80,
    wind: 10,
  };

  return (
    <div className="input-data">
      <div className="row city-temperature align-items-center">
        <div className="col">
          <Degree city="Kyiv" temperature={20} />
        </div>
        <div className="col icon">
          <img src={forecastData.imgUrl} alt="" width="200" id="icon" />
        </div>
        <div className="col info-day">
          <ul className="humidity-wind">
            <li className="description">{forecastData.description}</li>
            <li>
              Last update:
              <br />
              <span className="lastUpdate">{forecastData.date}</span>
            </li>
            <li>
              Humidity:{" "}
              <span className="humidity">{forecastData.humidity}</span> %
            </li>
            <li>
              Wind: <span className="wind">{forecastData.wind}</span> m/s
            </li>
          </ul>
        </div>
      </div>
      <div className="weather-forecast"></div>
    </div>
  );
}
