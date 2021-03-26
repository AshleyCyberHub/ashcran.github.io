const requestURL = 'https://ashleycyberhub.github.io/chamber/json/member.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        // console.table(jsonObject);  // temporary checking for valid response and data parsing
        const levels = jsonObject['levels'];
        levels.forEach(level => {
            if (level.name == "Non-profit" || level.name == "Bronze" || level.name == "Silver" || level.name == "Gold"){
                let card = document.createElement('article')
                let div = document.createElement('div')
                let h2 = document.createElement('h2');
                let h3 = document.createElement('h3');
                let p1 = document.createElement('p');
                

                div.setAttribute('class', 'lInfo')
                h2.textContent = level.name;
                h2.setAttribute('class', 'lName');
                h3.textContent = level.annualfee;
                h3.setAttribute('class', 'lannualfee');
                p1.textContent = "What is included: " + level.perks;
               

                div.appendChild(h2);
                div.appendChild(h3);
                div.appendChild(p1);
                card.appendChild(div);
            

                document.querySelector('div.cards').appendChild(card);
            }
        });

    }