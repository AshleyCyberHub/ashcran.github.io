const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5678757&units=imperial&APPID=24375515055b03d914b3ddbe02612655';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsonObject) => {
   // console.log(jsObject);

  document.getElementById('current-temp').textContent = jsonObject.main.temp;
  document.getElementById('high-temp').textContent = jsonObject.main.temp_max;
  document.getElementById('humidity').textContent = jsonObject.main.humidity;
  document.getElementById('wind-speed').textContent = jsonObject.wind.speed;
  
  const h = parseFloat(document.getElementById("high-temp").innerHTML);
  const s = parseFloat(document.getElementById("wind-speed").innerHTML);
  
  if (h <= 50 && s >= 3) {
   let windchill = 35.74 + 0.6215 * h - 35.75 * Math.pow(s, 0.16) + 0.4275 * h * Math.pow(s, 0.16);   
   windchill = document.getElementById("wind-chill").innerHTML = Math.round(windchill) + "&deg; " + "F";
  } 
  else {
    windchill = "NA";

    document.getElementById("wind-chill").innerHTML = windchill;
  };
  

  const imagesrc = 'https://openweathermap.org/img/w/' + jsonObject.weather[0].icon + '.png';  // note the concatenation
  const desc = jsonObject.weather[0].description;  // note how we reference the weather array
  document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
  document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
  document.getElementById('icon').setAttribute('alt', desc);
});




