function bannerAlert() {
    
    var d = new Date();
    var n = d.getDay();
      
    if(n === 5) {
          var element = document.getElementById("announcement")
          element.classList.add("show");
          return;
           }
          else {
          var element = document.getElementById("announcement")
          element.classList.add("hide");
          return;
         }
        
        }
      