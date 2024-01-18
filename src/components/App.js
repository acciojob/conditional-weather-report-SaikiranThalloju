import React from "react";
import './../styles/App.css';

const App = () => {

  const weather = { temperature:25, conditions: "Sunny"};
  const temperatureColor = weather.temperature > 20 ? 'red' : 'blue';

  return (
    <div id="main">
        <h2>Weather Report</h2>
        <p>Temperature: <span style={{color:temperatureColor}}>{weather.temperature}</span></p>
        <p>Conditions: {weather.conditions}</p>
    </div>
  )
}

export default App