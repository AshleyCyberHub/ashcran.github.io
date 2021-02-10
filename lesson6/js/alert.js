window.onload = function toggleAnnouncement() {

    let d = new Date();
    let q = d.getDay();
  
    if (q != 5) {
      document.getElementById("pancakes").classList.toggle("hide") +"Saturday = Preston Pancakes in the Park!"
      "9:00 a.m. Saturday at the city park pavilion." ;
    }
    // console.log(q);
  };