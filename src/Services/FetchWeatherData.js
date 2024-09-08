import axios from "axios";

async function FetchWeatherData(city = "london") {
    const API_key = "06ba6cec98feb37a49e4a88663a54251";
    console.log("City = ", city);
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`);
        // console.log(response);
        return response.data;
    }
    catch(error) {
        console.error(error);
        return null;
    }
}

export default FetchWeatherData;