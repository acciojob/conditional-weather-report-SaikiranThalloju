
import React from "react";
import './../styles/App.css';

const App = () => {
  // Sample weather data
  const weatherData = { temperature: 25, conditions: "Sunny" };
  // Temperature threshold
  const temperatureThreshold = 20;

  // Determine the color based on the temperature
  const temperatureColor = weatherData.temperature > temperatureThreshold ? 'red' : 'blue';

  return (
    <div>
      <h1>Weather App</h1>
      <div style={{ color: temperatureColor }}>
        {/* Display temperature with the "°C" suffix */}
        <span>Temperature: {weatherData.temperature}</span>
        <p>Conditions: {weatherData.conditions}</p>
      </div>
    </div>
  );
}

export default App;
