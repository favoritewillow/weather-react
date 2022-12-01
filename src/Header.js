import React, { useState } from "react";
import FormatDay from "./FormatDay";
import FormatFullData from "./FormatFullData";

import "./Header.css";
import axios from "axios";

export default function Header(props) {
  const [fullData, setFullData] = useState({ ready: false });
  function handleResponseDate(response) {
    setFullData({
      ready: true,
      date: new Date(response.data.dt * 1000),
    });
  }

  if (fullData.ready) {
    return (
      <div className="Header">
        <div className="row variable-data align-items-center">
          <div className="col-3 currentDay">
            <FormatDay date={fullData.date} />
          </div>
          <div className="col-3 currentDate">
            <FormatFullData date={fullData.date} />
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
      </div>
    );
  } else {
    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponseDate);
  }
}
