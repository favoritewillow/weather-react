import React, { useState } from "react";
import axios from "axios";
import "./Header.css";

export default function Header() {
  const [city, setCity] = useState("");

  let todayDate = {
    day: "Tuesday",
    date: "16 November 2022",
  };
  function handleSubmit(event) {
    event.preventDefault();
    searchCity(city);
  }

  function searchCity(city) {
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(showTemperature);
  }

  function showTemperature(response) {
    alert(response.data.name);
    setCity(response.data.name);
  }

  return (
    <div className="Header">
      <div className="row variable-data align-items-center">
        <div className="col-3 currentDay">{todayDate.day}</div>
        <div className="col-3 currentDate">{todayDate.date}</div>

        <div className="col">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Type a city ..."
                aria-label="Type a city ... with two button addons"
                onChange={searchCity}
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
    </div>
  );
}
