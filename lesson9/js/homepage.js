
const requestURL='https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
.then(function (response) {
   return response.json();
  })
  .then(function (jsonObject) {
  // console.table(jsonObject);
  const towns = jsonObject['towns'];
  const cities = document.querySelector('.cities');
  // let preston;
  // let sodasprings;
  // let fishhaven;
towns.forEach( town =>  { 
   let city = document.createElement('section');
   let h2 = document.createElement('h2');

   h2.innerHTML = `${town.name}`;

   city.append(h2);
   cities.append(city);
});

 