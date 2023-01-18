import React, {useState} from "react";
import axios from 'axios';

export default function Weather() {
    const [city, setCity] = useState("");
  
    function updateCity(event) {
      event.preventDefault();
      setCity(event.target.value);
    }
    function handleSubmit(event) {
      event.preventDefault();
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a1140261bdb0b194c8ae933d2f478860&units=metric`;
      axios.get(url).then(showData);
    }
  
    let [temperature, setTemperature] = useState("");
    let [description, setDescription] = useState("");
    let [humidity, setHumidity] = useState("");
    let [wind, setWind] = useState("");
    let [icon, setIcon] = useState("");
  
    function showData(response) {
      console.log(response);
      setTemperature(`Temperature: ${Math.round(response.data.main.temp)}ºC`);
      setDescription(`Description: ${response.data.weather[0].description}`);
      setHumidity(`Humidity: ${Math.round(response.data.main.humidity)}%`);
      setWind(`Wind: ${Math.round(response.data.wind.speed)}km/h`);
      setIcon(
        `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
      );
    }
  
    return (
      <div className="App">
        <h1>Weather App</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter a city..."
            onChange={updateCity}
          />
          <input type="submit" value="Search" />
        </form>
        <ul>
          <li>{temperature}</li>
          <li>{description}</li>
          <li>{humidity}</li>
          <li>{wind}</li>
          <li>
            <img src={icon} alt="icon" />
          </li>
        </ul>
        <div>Coded by Flávia Nunes, with open source on <a href="https://github.com/flaviacastnunes/project-react" tittle="GitHub Repository">GitHub</a></div>
      </div>
    );
  }