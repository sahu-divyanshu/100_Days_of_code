import "./WeatherApp.css"

import React, { useState } from 'react'

import search_icon from "../Images/search.png"
import clear from "../Images/clear.png"
import clouds from "../Images/clouds.png"
import drizzle from "../Images/drizzle.png"

import humidity from "../Images/humidity.png"
import mist from "../Images/mist.png"

import rain from "../Images/rain.png"
import snow from "../Images/snow.png"
import wind from "../Images/wind.png"

import rainbg from "../Images/rainbg.jpg"
import snowbg from "../Images/snowbg.jpg"

import clearbg from "../Images/clearbg.jpg"
import cloudbg from "../Images/cloudbg.jpg"
import drizzlebg from "../Images/drizzlebg.jpg"



const WeatherApp = () => {
    const apiKey = "e7a1c0cd3e2a71f0724b9031308f9ecd";

    const[bg,setbg] = useState(clearbg);
    const [wicon,setWicon] = useState(clear);

    const search = async () =>{
        const element = document.getElementsByClassName("cityInput")
        if(element[0].value === ""){
            return 0;
        }
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=${element[0].value}&appid=${apiKey}`;

        let response = await fetch(apiUrl);
        let data = await response.json();

        const humidity = document.getElementsByClassName("humidity-percent")
        const wind = document.getElementsByClassName("wind-rate");
        const temp = document.getElementsByClassName("temp")
        const location = document.getElementsByClassName("city")

        humidity[0].innerHTML = data.main.humidity + "%";
        wind[0].innerHTML = data.wind.speed + " Km/h";
        temp[0].innerHTML = data.main.temp + "°C";
        location[0].innerHTML = data.name;

        if(data.weather[0].main === "Clouds"){
           setWicon(clouds)
           setbg(cloudbg)
        }
        else if(data.weather[0].main === "Clear"){
            setWicon(clear);
            setbg(clearbg)
        }
        else if(data.weather[0].main === "Rain"){
            setWicon(rain)
            setbg(rainbg)
        }
        else if(data.weather[0].main === "Drizzle"){
            setWicon(drizzle)
            setbg(drizzlebg)
        }
        else if(data.weather[0].main === "Mist"){
            setWicon(mist)
            setbg(drizzlebg)
        }
        else if(data.weather[0].main === "Snow"){
            setWicon(snow)
            setbg(snowbg)
        }
    
    }
  return (
    <div className="main" style={{backgroundImage: `url(${bg})`}}>
    <div className="container">
        <div className="top-bar">
            <input type="text" className="cityInput" placeholder="search city"/>
            <button onClick={()=>{
                search();
            }}><img src={search_icon} alt=" "/></button>
        </div>
    
            <img src={wicon} alt=" " className="weather-icon"/>
      
        <h1 class="temp">22°c</h1>
        <h2 class="city">New York</h2>
        <div className="data-container">
            <div className="element">
                <img src={humidity} alt=" " className="icon"/>
                <div className="data">
                    <div className="humidity-percent">52%</div>
                    <div className="text">Humidity</div>
                </div>
            </div>
            <div className="element">
                <img src={wind} alt=" " className="icon"/>
                <div className="data">
                    <div className="wind-rate">11 Km/h</div>
                    <div className="text">Wind Speed</div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default WeatherApp
