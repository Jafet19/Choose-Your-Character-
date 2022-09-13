document.addEventListener("DOMContentLoaded", () => {
    const card = document.querySelector('.cards');

    const listOfCharacters = [];

    fetch('https://www.amiiboapi.com/api/amiibo')
        .then(response => response.json())
        .then(data => data.amiibo.forEach(element => {
            
            console.log(element)
        }))

        
    // listOfCharacters.forEach(element => {
    //     const newDiv1 = document.createElement('div');
    //     const newDiv2 = document.createElement('div');
    //     const img = document.createElement('img');

    //     // const nameSeries = document.getElementById('name-series');
    //     // const characterName = document.getElementById('character-name');

    //     newDiv1.className = 'card';
    //     newDiv2.className = 'circle';
    //     // newDiv3.className = ''
    //     img.src = element.image;
    //     img.className = 'img';
    //     card.appendChild(img);

    //     card.append(newDiv1);
    // })



    // .then(data => data.amiibo.forEach(element => {
    //     const newDiv1 = document.createElement('div');
    //     const newDiv2 = document.createElement('div');
    //     const img = document.createElement('img');

    //     const nameSeries = document.getElementById('name-series');
    //     const characterName = document.getElementById('character-name');

    //     newDiv1.className = 'card';
    //     newDiv2.className = 'circle';
    //     // newDiv3.className = ''
    //     img.src = element.image;
    //     img.className = 'img';
    //     card.appendChild(img);

    //     card.append(newDiv1);


    //     // name.textContent = `Character's name: ${element.name}`;




    // }));

    //switch button to turn the background dark or white

    const toggle = document.querySelector('.switch [type="checkbox"]');


    toggle.addEventListener('click', () => {

        if (toggle.checked === true) {
            document.body.style.backgroundColor = '#404040';
            document.body.style.color = 'white';
            document.querySelector('.logo').style.filter = 'invert(75%)'

        } else {
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
            document.querySelector('.logo').style.filter = 'invert(0%)'
        }
    });

});
