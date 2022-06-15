import React, { useState } from "react";
import "./App.scss";
import backgroundImg from "./images/25501.jpg";

function Weather() {
  const apiKey = "fb7931a419393786d34c4385aca96fc5";
  const [weatherData, setWeatherData] = useState([{}]);
  const [city, setCity] = useState("");
  const getWeather = (event) => {
    if (event.key === "Enter") {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`
      )
        .then((response) => response.json())
        .then((data) => {
          setWeatherData(data);
          setCity("");
        });
    }
  };
  return (
    <div className="weatheramain" >
     <main className="man-wrapper weather"style={{ backgroundImage: `url(${backgroundImg})` }}>
      <div className="container">
        <div className="weather-data__wrapper">
          <h1>{weatherData.name}</h1>
          <p className="temp">{Math.round(weatherData.main.temp)}</p>
          <p className="sky">{weatherData.weather[0].main}</p>
        </div>
       </div>
     </main>
    </div>
  );
}

export default Weather;
