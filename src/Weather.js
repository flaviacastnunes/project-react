import React from "react";
import axios from 'axios';

export default function Weather(props){
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=a1140261bdb0b194c8ae933d2f478860&units=metric`;
    

    function showTemp(response){
alert(`It's ${response.data.main.temp}ºC`)
    }
axios.get(url).then(showTemp);
}