 
}function doInputOutput() {
    temp = parseInt(document.getElementById("temp").value);
    let speedMph = parseInt(document.getElementById("speedMph").value);
    let f = windChill(temp, speedMph);
    document.getElementById("outputDiv").innerHTML ="Feels like " + Math.round(f) + "°F";
  }
  function windChill(tempF, speed) {
    let r =35.74 + 0.6215 * tempF - 35.75 * Math.pow(speed, 0.16) + 0.4275 * tempF * Math.pow(speed, 0.16);
    return r;
  }