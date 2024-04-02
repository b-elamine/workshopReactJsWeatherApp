import React from 'react';

function WeatherParameter({ iconSrc, label, value }) {
    return (
        <div className="weather-parameter">
            <img src={iconSrc} alt={label} />
            <p>
                {label}: {value}
            </p>
        </div>
    );
}
export default WeatherParameter;