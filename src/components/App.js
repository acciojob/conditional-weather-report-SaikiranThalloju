import React, { useState, useEffect } from "react";
import './../styles/App.css';

const App = () => {
  const [weatherInput, setWeatherInput] = useState({ temperature: 25, conditions: "Sunny" });
  const [textColor, setTextColor] = useState("blue");

  useEffect(() => {
    // Set text color based on temperature threshold
    if (weatherInput.temperature > 20) {
      setTextColor("red");
    } else {
      setTextColor("blue");
    }
  }, [weatherInput.temperature]);

  const weather = { temperature: 25, conditions: "Sunny" };
  const temperatureColor = weather.temperature > 20 ? 'red' : 'blue';

  return (
    <div>
      {/* Do not remove the main div */}
      <div style={{ color: textColor }}>
        <p>Temperature: {weatherInput.temperature}</p>
        <p>Conditions: {weatherInput.conditions}</p>
      </div>
      <div id="main">
        <h2>Weather Report</h2>
        <p>Temperature: <span style={{ color: temperatureColor }}>{weather.temperature}</span></p>
        <p>Conditions: {weather.conditions}</p>
      </div>
    </div>
  );
};

export default App;
