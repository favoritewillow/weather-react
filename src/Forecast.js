import React, { useState } from "react";
import "./Forecast.css";
import FormatDay from "./FormatDay";
import FormatFullData from "./FormatFullData";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";

export default function Forecast(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.date);
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
        <div className="row variable-data align-items-center">
          <div className="col-3 currentDay">
            <FormatDay date={weatherData.date} />
          </div>
          <div className="col-3 currentDate">
            <FormatFullData date={weatherData.date} />
          </div>

          <div className="col">
            <form>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type a city ..."
                  aria-label="Type a city ... with two button addons"
                />
                <button className="btn btn-outline-secondary" type="button">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
                <button className="btn btn-outline-secondary" type="button">
                  <i className="fa-solid fa-location-dot"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
