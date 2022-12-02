import axios from "axios";
import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastFiveDay(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div class="col week">
      <ul class="five-days">
        <li class="day">
          <h3>Thursday</h3>
        </li>
        <li class="weather">Light rain</li>
        <li class="icons">
          <WeatherIcon code="13d" size={80} />
        </li>
        <li class="temperature">
          <span class="maxTemperature">10</span>
          °/
          <span class="minTemperature">5</span>°
        </li>
      </ul>
    </div>
  );
}
