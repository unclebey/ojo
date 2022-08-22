const searchBtn = document.getElementById('search');
const days = document.getElementById('day');
const  dates = document.getElementById('date')
const city = document.getElementById('location')
const icons = document.getElementById('weatherIcon')
const temps = document.getElementById('temp')
const apps = document.getElementById('app')



getDays();



searchBtn.addEventListener('click', getWeatherDetails);

function getWeatherDetails(){

let searchLocation = document.getElementById('searchInput').value;

fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchLocation}?unitGroup=metric&key=G3W2C9R5DN23VPB2HHAG4XEHJ&contentType=json`)
.then(response => response.json())
.then(getWeatherDetails => {
  
let days = getWeatherDetails.days[0].datetime
let locate = getWeatherDetails.resolvedAddress
let temperature = getWeatherDetails.days[0].temp
let cweather = getWeatherDetails.days[0].description




if(temperature <=20){
  apps.style.backgroundImage = "url('./image/Blood.webp')"
  apps.style.backgroundSize = "cover"
}else if(temperature >=20  && temperature <= 30){
  apps.style.background = "url('./image/Moon.webp')"
  apps.style.backgroundSize = "cover"
}

else if (temperature >=30  && temperature <= 40){
  apps.style.background = "url('./image/Sun.webp')"
  apps.style.backgroundSize = "cover"
}
 else {
  apps.style.backgroundColor = 'lightblue'
 }

temps.textContent=temperature;
city.textContent = locate;
dates.textContent = days;



})





}



function getDays() {
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const d = new Date();
  let day = weekday[d.getDay()];
  document.getElementById("day").innerHTML = day;
}
