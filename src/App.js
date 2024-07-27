import "./styles.css";
import React from "react";

export default function App() {
  return (
    <div className="weather-app">
      <form id="search-form">
        <input
          type="search"
          className="search-input"
          id="search-input"
          placeholder="Enter a city..."
          required
        />
        <input type="submit" className="search-button" value="Search" />
      </form>
      <div className="current-weather">
        <div>
          <h1 className="current-city" id="current-city">
            San Francisco
          </h1>
          <p className="current-details">
            <span id="current-date"></span>, few clouds
            <br />
            Humidity:{" "}
            <span className="conditions" id="humidity">
              59%
            </span>
            , Wind:
            <span className="conditions" id="wind">
              {" "}
              8.49km/h
            </span>
          </p>
        </div>
        <div className="current-temperature">
          <span className="current-temperature-icon">🌤️</span>
          <span className="current-temperature-value">15</span>
          <span className="current-temperature-unit">
            <sup>°C</sup>
          </span>
        </div>
      </div>

      <br />
      <div className="weekForecast">
        <div className="day">
          Tues
          <br />
          <span className="dayEmoji">🌤️</span>
          <br />
          <span className="dayTemp">
            <strong>14°</strong> | 9°
          </span>
        </div>
        <br />
        <br />
        <div className="day">
          Wed
          <br />
          <span className="dayEmoji">🌤️</span>
          <br />
          <span className="dayTemp">
            <strong>14°</strong> | 10°
          </span>
        </div>
        <br />
        <br />
        <div className="day">
          Thu
          <br />
          <span className="dayEmoji">🌧️</span>
          <br />
          <span className="dayTemp">
            <strong>13°</strong>| 11°
          </span>
        </div>
        <br />
        <br />
        <div className="day">
          Fri
          <br />
          <span className="dayEmoji">🌧️</span>
          <br />
          <span className="dayTemp">
            <strong>11°</strong> | 10°
          </span>
        </div>
        <br />
        <br />
        <div className="day">
          Sat
          <br />
          <span className="dayEmoji">🌧️</span>
          <br />
          <span className="dayTemp">
            <strong>10°</strong> | 8°
          </span>
        </div>
      </div>
      <br />
      <footer>
        <p className="finePrint">
          This project was coded by
          <a href="https://www.shecodes.io/">SheCodes</a> and is
          <a href="https://github.com/shecodesio/weather">
            open-sourced on GitHub
          </a>
          and{" "}
          <a href="https://shecodes-weather.netlify.app/">hosted on Netlify</a>
        </p>
      </footer>
    </div>
  );
}
