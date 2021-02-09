window.onload = function toggleAnnouncement() {
    // a test to see if my function is getting called when the page loads
    //   console.log("it worked");
  
    // a test to see if I can get the element by ID
    //   console.log(document.getElementById("pancakes").classList);
  
    let d = new Date();
    let q = d.getDay();
  
    if (q != 5) {
      document.getElementById("pancakes").classList.toggle("hide") + "Saturday = Preston Pancakes in the Park!"
      "9:00 a.m. Saturday at the city park pavilion." ;
    }
    //A test to make sure it worked
    //   console.log(q);
  };