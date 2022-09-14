const card = document.getElementsByClassName('cards')

function luffy(character) {

    const NewcharacterName = document.getElementById('character-name');

    const newDiv1 = document.createElement('div');
    const newDiv2 = document.createElement('div');
    const img = document.createElement('img');
    newDiv1.className = 'card';
    newDiv2.className = 'circle';
    // newDiv3.className = ''
    img.src = character.image;
    img.className = 'img';
    card.appendChild(img);

    card.append(newDiv1);

    const form = document.querySelector('#Add-Character')
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = e.target['Name'].value
        const game = e.target['Game-designation'].value
        const url = e.target['new-image'].value
        const bio = e.target['new-bio'].value

        card.append(name, url)
    })

}
