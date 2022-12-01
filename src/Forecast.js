import React, { useState } from "react";
import "./Forecast.css";
import Degree from "./Degree";
import FormatDate from "./FormatDate";
import axios from "axios";

export default function Forecast(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000) /*last update*/,
      description: response.data.weather[0].description,
      icon: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      humidity: response.data.main.humidity,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Forecast">
        <div className="input-data">
          <div className="row city-temperature align-items-center">
            <div className="col">
              <Degree
                city={weatherData.city}
                temperature={Math.round(weatherData.temperature)}
              />
            </div>
            <div className="col icon">
              <img src={weatherData.icon} alt="" width="200" id="icon" />
            </div>
            <div className="col info-day">
              <ul className="humidity-wind">
                <li className="description">{weatherData.description}</li>
                <li>
                  Last update:
                  <br />
                  <span className="lastUpdate">
                    <FormatDate date={weatherData.date} />
                  </span>
                </li>
                <li>
                  Humidity:{" "}
                  <span className="humidity">{weatherData.humidity}</span> %
                </li>
                <li>
                  Wind: <span className="wind">{weatherData.wind}</span> m/s
                </li>
              </ul>
            </div>
          </div>
          <div className="weather-forecast"></div>
        </div>
      </div>
    );
  } else {
    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
