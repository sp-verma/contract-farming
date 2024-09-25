// components/weather.js
import React, { useEffect, useState } from "react";

const WeatherSection = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Use your API key from OpenWeatherMap
        const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key
        const city = "Your_City"; // Replace with the farmer's location or a default city
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        if (!response.ok) {
          throw new Error("Weather data fetch failed");
        }
        const data = await response.json();
        setWeatherData(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) return <div>Loading weather information...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Current Weather</h2>
      <div>
        <p><strong>Location:</strong> {weatherData.name}</p>
        <p><strong>Temperature:</strong> {weatherData.main.temp} °C</p>
        <p><strong>Weather:</strong> {weatherData.weather[0].description}</p>
        <p><strong>Humidity:</strong> {weatherData.main.humidity}%</p>
        <p><strong>Wind Speed:</strong> {weatherData.wind.speed} m/s</p>
      </div>
    </div>
  );
};

export default WeatherSection;
