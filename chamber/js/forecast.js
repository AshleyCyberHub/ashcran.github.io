const forecastapiURL= "https://api.openweathermap.org/data/2.5/forecast?id=5585010&units=imperial&appid=24375515055b03d914b3ddbe02612655";
fetch(forecastapiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject); //to test
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const fiveday = jsObject.list.filter((element) =>  element.dt_txt.includes("18:00:00")
);

let day = 0;
let i = 0;

for (i = 0; i < fiveday.length; i++) {
  let d = new Date(fiveday[i].dt_txt); 

  document.getElementById("dayofweek" + (day + 1)).textContent = days[d.getDay()];
  document.getElementById("forecast" + (day + 1)).textContent = Math.round(fiveday[day].main.temp);

  const imagesrc = "https://openweathermap.org/img/w/" + fiveday[day].weather[0].icon + ".png";

  document.getElementById("imagesrc" + (day + 1)).textContent = imagesrc;
  document.getElementById("icon" + (day + 1)).setAttribute("src", imagesrc);
  document.getElementById("icon" + (day + 1)).setAttribute("alt", fiveday[0].weather[0].description);

  day++;
}
});
