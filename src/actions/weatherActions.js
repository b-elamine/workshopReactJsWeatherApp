import axios from 'axios';

export const fetchWeatherData = (city) => async dispatch => {
    try {
        const apiKey = '633a93396c5642d78ae123914240104';
        const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
        dispatch({ type: 'SET_WEATHER_DATA', payload: response.data });
    } catch (error) {
        console.error("Error fetching weather data", error);
    }
};

export default fetchWeatherData;