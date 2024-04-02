import React, { useState } from 'react';
//import { fetchWeatherData } from '../actions/weatherActions';
import axios from 'axios';
const API_KEY = '633a93396c5642d78ae123914240104';

function SearchBar({ setWeatherData}) {
    const [city, setCity] = useState('Villeurbanne');

    function handleSubmit(e) {
        e.preventDefault();
        try {
            axios.get(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`)
            .then(response => {
                setWeatherData(response.data);
                console.log(response.data)
            })
            .catch(error => {
                console.error("Error fetching weather data", error);
            });
        } catch (error) {
            console.error("Error fetching weather data", error);

        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
            className='search-input'
            type="text"
            placeholder="Enter City Name"
            value={city}
            onChange={(e) => {
                console.log(e.target.value)
                setCity(e.target.value)
            }}
        />

        <button type="submit" className='search-button'>Search</button>

        </form> 
);
}

export default SearchBar;