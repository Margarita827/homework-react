import React from "react";

export default function Weather() {
  let weatherData = {
    city: "Brighton",
    date: "Tuesday",
    calendarDate: "20th Feb",
    temperature: "10",
    humidity: "87%",
    wind: "18mph",
  };

  return (
    <div className="Weather">
      <header>
        <form className="search-form">
          <input
            type="search"
            placeholder="Enter a city"
            required
            className="search-city"
            id="search-city"
          />
          <input type="submit" value="Search" class="search-button" />
        </form>
      </header>
      <main>
        <div className="weather-data">
          <div>
            <h1 className="current-city">{weatherData.city}</h1>
            <p className="weather-details">
              <span>{weatherData.date}</span>,
              <span>{weatherData.calendarDate}</span>
              <br />
              Humidity: <strong>{weatherData.humidity}</strong>, Wind:
              <strong>{weatherData.wind}</strong>
            </p>
          </div>
          <div className="temperature-container">
            <div></div>

            <div className="current-temperature">{weatherData.temperature}</div>
            <div className="temp-unit">ºC</div>
          </div>
        </div>
      </main>
    </div>
  );
}
