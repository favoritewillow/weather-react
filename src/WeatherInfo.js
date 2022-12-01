import React from "react";
import Degree from "./Degree";
import FormatDate from "./FormatDate";

export default function WeatherInfo(props) {
  return (
    <div className="input-data">
      <div className="row city-temperature align-items-center">
        <div className="col">
          <Degree
            city={props.data.city}
            temperature={Math.round(props.data.temperature)}
          />
        </div>
        <div className="col icon">
          <img src={props.data.icon} alt="" width="200" id="icon" />
        </div>
        <div className="col info-day">
          <ul className="humidity-wind">
            <li className="description">{props.data.description}</li>
            <li>
              Last update:
              <br />
              <span className="lastUpdate">
                <FormatDate date={props.data.date} />
              </span>
            </li>
            <li>
              Humidity: <span className="humidity">{props.data.humidity}</span>{" "}
              %
            </li>
            <li>
              Wind: <span className="wind">{props.data.wind}</span> m/s
            </li>
          </ul>
        </div>
      </div>
      <div className="weather-forecast"></div>
    </div>
  );
}