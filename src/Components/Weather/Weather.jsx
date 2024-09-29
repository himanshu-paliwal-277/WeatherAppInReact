import searchIcon from "../../assets/Images/search.png";
import humidityImage from "../../assets/Images/humidity.png";
import windImage from "../../assets/Images/wind.png";
import { useEffect, useState } from "react";
import FetchWeatherData from "../../Services/FetchWeatherData.js";
import clear_icon from "../../assets/Images/clear.png";
import cloud_icon from "../../assets/Images/cloud.png";
import drizzle_icon from "../../assets/Images/drizzle.png";
import rain_icon from "../../assets/Images/rain.png";
import snow_icon from "../../assets/Images/snow.png";

function Weather() {
  const [inputValue, setInputValue] = useState("");
  const [weatherData, setWeatherData] = useState(false);

  const allIcons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon,
  };

  useEffect(() => {
    FetchWeatherData("ujjain").then((data) => {
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: data.weather[0].icon,
      });
    });
  }, []);

  function searchInputHandler(event) {
    setInputValue(event.target.value);
  }

  function searchWeather() {
    if(inputValue === "") {
      alert("Enter a city");
    }
    else {
      FetchWeatherData(inputValue).then((data) => {
        console.log(data);
        setWeatherData({
          humidity: data.main.humidity,
          windSpeed: data.wind.speed,
          temperature: Math.floor(data.main.temp),
          location: data.name,
          icon: data.weather[0].icon,
        });
      });
    }
    console.log("inputValue = ", inputValue);
    setInputValue("");
  }

  return (
    <>
      <div className="flex flex-col p-10 shadow-xl bg-gradient-to-t from-blue-600 to-sky-500 rounded-xl">
        <div className="flex ">
          <input
            className="px-5 py-2 mr-3 rounded-full w-[180px] sm:w-[240px]"
            onChange={searchInputHandler}
            type="text"
            value={inputValue}
            placeholder="Enter a city name"
          />
          <div
            onClick={searchWeather}
            className="p-3 bg-white rounded-full cursor-pointer hover:scale-105 active:scale-100"
          >
            <img className="w-4 h-4" src={searchIcon} alt="search icon" />
          </div>
        </div>
        <div>
          <div className="flex justify-center my-5">
            <img
              className="w-32 h-32"
              src={allIcons[weatherData.icon] || cloud_icon}
              alt="weatherImage"
            />
          </div>
          <div className="flex flex-col items-center text-white">
            <h1 className="mb-4 text-5xl font-semibold">
              {weatherData.temperature} <sup>o</sup> C
            </h1>
            <p className="text-3xl">{weatherData.location}</p>
          </div>
          <div className="flex justify-between mt-10 text-sm font-semibold text-white">
            <div className="flex items-center">
              <img
                className="w-5 h-5"
                src={humidityImage}
                alt="humidityImage"
              />
              <div className="ml-4">
                <h3 className="text-lg">{weatherData.humidity} %</h3>
                <p>Humidity</p>
              </div>
            </div>
            <div className="flex items-center">
              <img
                className="w-5 h-5 scale-110"
                src={windImage}
                alt="windImage"
              />
              <div className="ml-4">
                <h3 className="text-lg">{weatherData.windSpeed} Km/h</h3>
                <p>Wind Speed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Weather;
