import React, { useEffect, useState } from "react";

export default function WeatherWidget() {
    const [isLoading, setIsLoading] = useState(true);
    const [weather, setWeather] = useState(null);

    // TODO: simulate loading weather data
    useEffect(() => {
        const timer = setTimeout(() => {
            setWeather({
                city: "Bali",
                temperature: "29°C",
                condition: "Sunny",
            });
            setIsLoading(false)
        }, 2000)
    }, []);

    return (
        <div style={{ padding: "20px", border: "1px solid #ddd" }}>
            <h2>Weather Widget</h2>

            {isLoading ? (
                <p>Loading weather...</p>
            ) : (
                <div>
                    <p>City: {weather.city}</p>
                    <p>Temperature: {weather.temperature}</p>
                    <p>Condition: {weather.condition}</p>
                </div>
            )}
        </div>
    );
}