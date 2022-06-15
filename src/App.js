import React, { useState } from "react";
import "./App.scss";
import backgroundImg from "./images/25501.jpg";

function App() {
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
    <div className="weatheramain">
      <main
        className="man-wrapper"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <div className="container">
          <div className="EnterCity">
            <input
              type="text"
              className="input"
              placeholder="Enter city"
              onChange={(e) => setCity(e.target.value)}
              value={city}
              onKeyPress={getWeather}
            />
          </div>

          {typeof weatherData.main === "undefined" ? (
            <div className="desc-text">
              <p>Welcome to weather app! Enter a city</p>
            </div>
          ) : (
            <div className="weather-data__wrapper">
              <h1>{weatherData.name}</h1>
              <div className="weatherDetails">
                <img
                  src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                  alt="weather status icon"
                />
                <div className="text_wrapper">
                  <p className="temp">{Math.round(weatherData.main.temp)}</p>
                  <p className="sky">{weatherData.weather[0].main}</p>
                </div>
              </div>
              <div className="weather_details-more">
                <table>
                 <tbody>
                 <tr>
                    <td>
                      <h3>{weatherData.main.temp_max}</h3>
                      <span>High</span>
                    </td>
                    <td>
                      <h3>7mph</h3>
                      <span>wind</span>
                    </td>
                    <td>
                      <h3>05:30</h3>
                      <span>Sunrise</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                    <h3>{weatherData.main.temp_min}</h3>
                      <span>Low</span>
                    </td>
                    <td>
                      <h3>7mph</h3>
                      <span>wind</span>
                    </td>
                    <td>
                      <h3>05:30</h3>
                      <span>Sunrise</span>
                    </td>
                  </tr>
                 </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
