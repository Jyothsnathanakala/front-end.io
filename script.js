const apiKey ="d5555408c08e29140c46c781883f2e1c";
const apiurl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiurl + city + `&appid=${apiKey}`);
    var data= await response.json();
console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/";

    if(data.weather[0].main == "Cloud"){
        weatherIcon.src = "images/Cloud.png";
    }
    else if(data.weather[0].main == "Thunderstroms"){
        weatherIcon.src = "images/Thunderstorms.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/Rain.png";
    }
    else if(data.weather[0].main== "Sunny"){
        weatherIcon.src = "images/Sunny.png";
    }
    else if(data.weather[0].main =="Error"){
        weatherIcon.src = "images/Error.png";
    }


    }
    
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
let now = new Date();
let date = document.querySelector('.location .date');
date.innerText = dateBuilder(now);
function dateBuilder (d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    return `${day} ${date} ${month} ${year}`;
  }