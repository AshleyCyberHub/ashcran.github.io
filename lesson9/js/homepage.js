const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
.then(function (response) {
   return response.json();
})
.then(function (jsonObject) {
  // console.table(jsonObject);  // temporary checking for valid response and data parsing
   const towns = jsonObject['towns'];
   for (let i = 0; i < towns.length; i++) {
      let card = document.createElement('section');
  // towns.forEach(town => {
   if (towns[i].name == 'Preston' || towns[i].name == 'Soda Springs' || towns[i].name == 'Fish Haven'){
      //let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let h3 = document.createElement('h3');
      let image = document.createElement('img');
      let div1 = document.createElement('div');
      let div2 = document.createElement('div');
      let div3 = document.createElement('div');
   
      h2.textContent = towns[i].name;
      h3.textContent = towns[i].moto;
      div1.setAttribute('class', 'yearFounded')
      div1.textContent = 'Year Founded: ' + towns[i].yearFounded;
      div2.setAttribute('class', 'currentPopulation')
      div2.textContent = 'Population: ' + towns[i].currentPopulation;
      div3.setAttribute('class', 'averageRainfall')
      div3.textContent = 'Average Rain Fall: ' + towns[i].averageRainfall;
      image.setAttribute('src', towns[i].imageurl);
     
      card.appendChild(h2);
      card.appendChild(h3);
      card.appendChild(div1);
      card.appendChild(div2);
      card.appendChild(div3);
      card.appendChild(image);
      document.querySelector('.cards').appendChild(card);
   }
}});