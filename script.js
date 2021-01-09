window.addEventListener("load", event => {
    const updated = document.querySelector("#update");
    updated.textContent = document.lastModified;
  
  var d = new Date();
document.getElementById("updated").innerHTML = d;
)}