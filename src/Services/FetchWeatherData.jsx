import axios from "axios";

export async function fetchCoinData() {
    const API_key = "06ba6cec98feb37a49e4a88663a54251";
    const city = "london";
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`);
        console.log(response);
        return response;
    }
    catch(error) {
        console.error(error);
        return null;
    }
}
