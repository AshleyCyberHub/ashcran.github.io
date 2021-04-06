const requestURL = 'https://ashleycyberhub.github.io/chamber/json/directory.json'; 
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        // console.table(jsonObject);  // temporary checking for valid response and data parsing
        const directory = jsonObject['directory'];
        directory.forEach(list => {
            if (list.name == "Babe's" || list.name == "Sanger BAnk" || list.name == "Fish Haven"){
                let card = document.createElement('article')
                let div = document.createElement('div')
                let h2 = document.createElement('h2');
                let h3 = document.createElement('h3');
                let p1 = document.createElement('p');
                let p2 = document.createElement('p');
                let p3 = document.createElement('p');
                let image = document.createElement('img');

                div.setAttribute('class', 'lInfo')
                h2.textContent = list.name;
                h2.setAttribute('class', lName');
                h3.textContent = list.address;
                h3.setAttribute('class', 'laddress');
                p1.textContent = "Year Founded: " + list.yearFounded;
                p2.textContent = "Population: " + list.currentPopulation;
                p3.textContent = "Average Rain Fall: " + list.averageRainfall;
                image.setAttribute('src', `images/homepage/${list.photo}`);
                image.setAttribute('alt', list.name);

                div.appendChild(h2);
                div.appendChild(h3);
                div.appendChild(p1);
                div.appendChild(p2);
                div.appendChild(p3);
                card.appendChild(div);
                card.appendChild(image);

                document.querySelector('div.cards').appendChild(card);
            }
        });

    });