
import React from "react";
import './../styles/App.css';

const App = () => {
  const weatherData = { temperature: 25, conditions: "Sunny" };
  const temperatureThreshold = 20;

  const temperatureColor = weatherData.temperature > temperatureThreshold ? 'red' : 'blue';

  return (
    <div>
      <h1>Weather App</h1>
      <div style={{ color: temperatureColor }}>
        <p>Temperature: {weatherData.temperature}°C</p>
        <p>Conditions: {weatherData.conditions}</p>
      </div>
    </div>
  );
}

export default App;

