const requestdirectoryURL = 'https://ashleycyberhub.github.io/chamber/json/directory.json'; 

fetch(requestdirectoryURL)
     .then(function (response) {
        return response.json();
})
.then(function (jsonObject) {
   //console.table(jsonObject); } // temporary checking for valid response and data parsing
   const directory = jsonObject['directory'];
   for (let i = 0; i < directory; i++) {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let div1 = document.createElement('div');
      let div2 = document.createElement('div');
      
      h2.textContent = directory[i].name + ' ';
      div1.setAttribute('class', 'address')
      div1.textContent = 'Address: ' + directory[i].address;
      div2.setAttribute('class', 'phonenumber')
      div2.textContent = 'Phone Number: ' + directory[i].phonenumber;
      
      card.appendChild(h2);
      card.appendChild(div1);
      card.appendChild(div2);
      document.querySelector('div.cards').appendChild(card);
   }
});
