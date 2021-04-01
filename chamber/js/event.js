const requestURL = 'https://ashleycyberhub.github.io/chamber/json/events.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        // console.table(jsonObject);  // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];
        towns.forEach(town => {
            if (town.name == "Sanger"){
                let event = document.createElement('section')
                let div = document.createElement('div')
                let h1 = document.createElement('h1');
                let h2 = document.createElement('h2');
                let p1 = document.createElement('p');
                let p2 = document.createElement('p');
                let p3 = document.createElement('p');
                let p4 = document.createElement('p');

                div.setAttribute('class', 'eventInfo')
                h1.textContent = town.name;
                h1.setAttribute('class', 'tName');
                h2.textContent = 'Upcoming Events: ';
                p1.textContent = town.events[0];
                p2.textContent = town.events[1];
                p3.textContent = town.events[2];
                p4.textContent = town.events[3];


                div.appendChild(h1);
                div.appendChild(h2);
                div.appendChild(p1);
                div.appendChild(p2);
                div.appendChild(p3);
                div.appendChild(p4);
                event.appendChild(div);

                document.querySelector('div.events').appendChild(event);
            }
        });

    });
    