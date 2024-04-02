import React, { useState } from 'react';
import SearchBar from './components/searchBar';
import Weather from './components/weather';
import './App.css';

function App() {

  const [weatherData, setWeatherData] = useState(null);
      return (
          <div>
            <img src="https://uxwing.com/wp-content/themes/uxwing/download/weather/weather-icon.png" alt="weather icon" height="100px" weight="100px"/>
            <h1>Weather App</h1>
            <SearchBar setWeatherData={setWeatherData}/>
            <Weather weatherData={weatherData}/><br/>
            </div>
          );
}

export default App;