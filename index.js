document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelector('.cards');
    //The listOfCharacters is going to store the characters that we fetch from the public API.
    const listOfCharacters = [];
    //The listOfCharactersReduced array is going to store the characters
    //from the listofcharacters.
    const listOfCharactersReduced = [];

    //The fetch will get the characters of super smash bros from the API and
    //push the charavters to the listOfCharacters.
    fetch('https://www.amiiboapi.com/api/amiibo/?amiiboSeries=super smash bros.')
        .then(response => response.json())
        .then(data => data.amiibo.forEach(element => {
            listOfCharacters.push({
                gameSeries: element.gameSeries,
                character: element.character,
                image: element.image,
                name: element.name
            });
        }));

    //Since the fetch is asyncronous, we will use a setTimeOut() to wait
    // 2 seconds until the fetch loads all the characters to the
    // listOfCharacters array.
    setTimeout(() => {

        //Here we are selecting 10 characters from the listOfCharacters
        //and pushing them into a new array called listOfCharactersReduced
        //to display it on the website.
        for (let i = 0; i < 10; i++) {
            listOfCharactersReduced.push(listOfCharacters[i]);
        }

        //Here we are going to iterate on each of the objects in the array
        //and display it on the website.
        listOfCharactersReduced.forEach(character => {
            const card = document.createElement('div');
            const circle = document.createElement('div');
            const img = document.createElement('img');
            card.className = 'card';
            circle.className = 'circle';
            img.name = character.name
            img.src = character.image;
            img.className = 'img';
            circle.appendChild(img);
            card.appendChild(circle);
            cards.append(card);

        })

        //Here we are adding a Gif and wait 1 second so that i can be add at the end of the cards.
        setTimeout(() => {
            const addCharacterForm = document.getElementById('Add-Character');
            const card = document.createElement('div');
            const circle = document.createElement('div');
            const addGif = document.createElement('img');
            card.className = 'card';
            circle.className = 'circle';
            addGif.id = 'add-Character'
            addGif.src = 'https://cdn.dribbble.com/users/388048/screenshots/3062368/_.gif';
            addGif.width = 90;
            addGif.style.marginTop = 45 + '%';
            circle.appendChild(addGif);
            card.appendChild(circle);
            cards.append(card);

            addGif.addEventListener('click', () => {
                const dotted2 = document.querySelector('.dotted2');
                dotted2.hidden = true;
                addCharacterForm.hidden = false;
            });

            //Here goes the code to add new Character
            addCharacterForm.addEventListener('submit', (e) => {
                e.preventDefault()


                const data = {
                    image: e.target.name.value,
                    name: e.target.image.value
                }
                //fetch

                fetch('http://localhost:3000/character', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json'
                    },
                    body: JSON.stringify(data),
                })
                    .then(response => response.json())
                    .then(characters => characters.forEach(character => {
                        const card = document.createElement('div');
                        const circle = document.createElement('div');
                        const img = document.createElement('img');
                        card.className = 'card';
                        circle.className = 'circle';
                        img.name = character.name;
                        img.src = character.image;
                        img.className = 'img';
                        circle.appendChild(img);
                        card.appendChild(circle);
                        cards.append(card);
                        addCharacterForm.hidden = true;
                    }))

            })

        }, 1000);

        //Here we are iterating through each element of the circle array which 
        // holds the div elements with the class named cirle. 
        //We are also hidding the characters bio and image from the

        const circle = document.querySelectorAll('.circle');
        const nameSeries = document.getElementById('name-series');
        const characterName = document.getElementById('character-name');
        const characterImage = document.getElementById('image');
        const box = document.querySelector('.container');

        circle.forEach(element => {

            element.addEventListener('click', (e) => {
                console.log(e.target.name)
                nameSeries.hidden = false;
                characterName.hidden = false;
                characterImage.hidden = false;
                box.hidden = false;

                for (let i = 0; i < listOfCharactersReduced.length; i++) {
                    if (listOfCharactersReduced[i].name === e.target.name) {
                        nameSeries.textContent = `Name Series: ${listOfCharactersReduced[i].gameSeries}`;
                        characterName.textContent = `Character's Name: ${listOfCharactersReduced[i].character}`;
                        characterImage.src = listOfCharactersReduced[i].image;
                    }
                }
            });
        });

    }, 2000);





    //switch button to turn the background dark

    const toggle = document.querySelector('.switch [type="checkbox"]');


    toggle.addEventListener('click', () => {
        const box = document.querySelector('.container');
        const dottedLine = document.querySelector('.dotted');
        const marioGif = document.querySelector('.mario-gif');
        const lightsOut = document.querySelector('.lights-out');

        if (toggle.checked === true) {
            document.body.style.backgroundColor = '#404040';
            document.body.style.color = 'white';
            document.querySelector('.logo').style.filter = 'invert(75%)';
            box.style.animation = "color-change 5s linear infinite";
            dottedLine.style.borderColor = 'blue';
            marioGif.hidden = true;
            lightsOut.hidden = false;



        } else {
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
            document.querySelector('.logo').style.filter = 'invert(0%)'
            box.style.animation = "";
            dottedLine.style.borderColor = '#bbb';
            marioGif.hidden = false;
            lightsOut.hidden = true;

        }


    });


});
