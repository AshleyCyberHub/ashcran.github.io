
let t = parseFloat(document.getElementById("temp").innerHTML);
let s = parseFloat(document.getElementById("wind-speed").innerHTML);

if (t <= 50 && s >= 3) {
  let wind = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
  wind = document.getElementById("windchill_num").innerHTML = Math.round(wind) + "&deg; " + "F";
} 
else {
  wind = "N/A";
  document.getElementById("windchill_num").innerHTML = wind;
}
