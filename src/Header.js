import React from "react";

import "./Header.css";

export default function Header() {
  let todayDate = {
    day: "Tuesday",
    date: "16 November 2022",
  };

  return (
    <div className="Header">
      <div className="row variable-data align-items-center">
        <div className="col-3 currentDay">{todayDate.day}</div>
        <div className="col-3 currentDate">{todayDate.date}</div>

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
}
