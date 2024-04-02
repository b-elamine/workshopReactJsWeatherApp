import React from 'react';
import WeatherParameter from './weatherParameters';

function Weather({ weatherData }) {
    return (
        <div className="weather-container">
            {weatherData && (
                <>
                    <h2>Weather in {weatherData.location.name}</h2>
                    <div className="parameters-container">
                        <div className="parameter-item">
                            <WeatherParameter
                                iconSrc="/images/icone_temperature.png"
                                label="Temperature"
                                value={`${weatherData.current.temp_c}°C`}
                            />
                        </div>
                        <div className="parameter-item">
                            <WeatherParameter
                                iconSrc="/images/icone_condition.png"
                                label="Condition"
                                value={weatherData.current.condition.text}
                            />
                        </div>
                        <div className="parameter-item">
                            <WeatherParameter
                                iconSrc="/images/icone_wind.png"
                                label="Wind Speed"
                                value={`${weatherData.current.wind_kph} km/h`}
                            />
                        </div>
                        <div className="parameter-item">
                            <WeatherParameter
                                iconSrc="/images/icone_humidity.png"
                                label="Humidity"
                                value={weatherData.current.humidity}
                            />
                        </div>
                        <div className="parameter-item">
                            <WeatherParameter
                                iconSrc="/images/icone_pressure.png"
                                label="Pressure"
                                value={`${weatherData.current.pressure_mb} mb / ${weatherData.current.pressure_in} in`}
                            />
                        </div>
                        <div className="parameter-item">
                            <WeatherParameter
                                iconSrc="/images/icone_uv.png"
                                label="UV index"
                                value={weatherData.current.uv}
                            />
                        </div>
                        <div className="parameter-item">
                            <WeatherParameter
                                iconSrc="/images/icone_cloud.png"
                                label="Cloud Cover"
                                value={weatherData.current.cloud}
                            />
                        </div>
                        <div className="parameter-item">
                            <WeatherParameter
                                iconSrc="/images/icone_visibility.png"
                                label="Visibility"
                                value={weatherData.current.vis_km}
                            />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default Weather;