import searchIcon from "../../assets/search.png";
import weatherImage from "../../assets/clear.png";
import humidityImage from "../../assets/humidity.png";
import windImage from "../../assets/wind.png";
import { useState } from "react";
import { fetchCoinData } from "../../Services/FetchWeatherData";

function Weather() {

  const [searchValue, setSearchValue] = useState("");

  function searchInputHandler(event) {
    // setSearchValue(searchValue);
    setSearchValue(event.target.value);
    // console.log(event.target.value);
  }

  function searchWeather() {
    console.log("searchValue = ", searchValue);
    setSearchValue("");
    fetchCoinData();
  }

  return (
    <>
      <div className="flex flex-col p-10 bg-purple-500 shadow-xl rounded-xl">
        <div className="flex ">
          <input className="px-4 py-2 mr-3 rounded-full" onChange={searchInputHandler} type="text" value={searchValue} placeholder="Search" />
          <div onClick={searchWeather} className="p-3 bg-white rounded-full cursor-pointer hover:scale-105 active:scale-100">
            <img className="w-4 h-4" src={searchIcon} alt="search icon" />
          </div>
        </div>
        <div>
            <div className="flex justify-center my-5 ">
                <img className="w-32 h-32" src={weatherImage} alt="weatherImage" />
            </div>
            <div className="flex flex-col items-center text-white">
                <h1 className="mb-4 text-5xl font-semibold">16 <sup>o</sup> c</h1>
                <p className="text-3xl">London</p>
            </div>
            <div className="flex justify-between mt-10 text-sm font-semibold text-white">
                <div className="flex items-center">
                    <img className="w-5 h-5" src={humidityImage} alt="humidityImage" />
                    <div className="ml-4">
                        <h3 className="text-lg">91 %</h3>
                        <p>Humidity</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <img className="w-5 h-5 scale-110" src={windImage} alt="windImage" />
                    <div className="ml-4">
                        <h3 className="text-lg">34 Km/h</h3>
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
