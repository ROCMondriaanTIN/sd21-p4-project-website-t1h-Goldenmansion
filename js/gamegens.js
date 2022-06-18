const showAllGames = document.querySelector('.rowGamesShower');


const spelGenres = [
    {
        id:1,
        title: 'mario odessy',
        beschrijving: 'Mario[e] is a character created by Japanese video game designer Shigeru Miyamoto. He is the title character of the Mario franchise and the mascot of Japanese video game company Nintendo. Mario has appeared in over 200 video games since his creation. Depicted as a short, pudgy, Italian plumber who resides in the Mushroom Kingdom, his adventures generally center on rescuing Princess Peach from the Koopa villain Bowser. Mario has access to a variety of power-ups that give him different abilities. Marios fraternal twin brother is Luigi',
        genre: 'avontuur',
        img: '../img/mario.jpg'


    },

    {
        id:2,
        title: 'zelda',
        beschrijving: 'Mario[e] is a character created by Japanese video game designer Shigeru Miyamoto. He is the title character of the Mario franchise and the mascot of Japanese video game company Nintendo. Mario has appeared in over 200 video games since his creation. Depicted as a short, pudgy, Italian plumber who resides in the Mushroom Kingdom, his adventures generally center on rescuing Princess Peach from the Koopa villain Bowser. Mario has access to a variety of power-ups that give him different abilities. Marios fraternal twin brother is Luigi',
        genre: 'avontuur',
        img: '../img/zelda.jpg'


    },

    {
        id:3,
        title: 'kirby',
        beschrijving: 'Mario[e] is a character created by Japanese video game designer Shigeru Miyamoto. He is the title character of the Mario franchise and the mascot of Japanese video game company Nintendo. Mario has appeared in over 200 video games since his creation. Depicted as a short, pudgy, Italian plumber who resides in the Mushroom Kingdom, his adventures generally center on rescuing Princess Peach from the Koopa villain Bowser. Mario has access to a variety of power-ups that give him different abilities. Marios fraternal twin brother is Luigi',
        genre: 'avontuur',
        img: '../img/kirby.jpg'


    },

    {
        id:4,
        title: 'call of duty',
        beschrijving: 'red in over 200 video games since his creation. Depicted as a short, pudgy, Italian plumber who resides in the Mushroom Kingdom, his adventures generally center on rescuing Princess Peach from the Koopa villain Bowser. Mario has access to a variety of power-ups that give him different abilities. Marios fraternal twin brother is Luigi',
        genre: 'actie',
        img: '../img/cod.jpg'


    },
    {
        id:5,
        title: 'destiny',
        beschrijving: 'red in over 200 video games since his creation. Depicted as a short, pudgy, Italian plumber who resides in the Mushroom Kingdom, his adventures generally center on rescuing Princess Peach from the Koopa villain Bowser. Mario has access to a variety of power-ups that give him different abilities. Marios fraternal twin brother is Luigi',
        genre: 'actie',
        img: '../img/destiny.jpg'


    },
    {
        id:6,
        title: 'tarkov',
        beschrijving: 'red in over 200 video games since his creation. Depicted as a short, pudgy, Italian plumber who resides in the Mushroom Kingdom, his adventures generally center on rescuing Princess Peach from the Koopa villain Bowser. Mario has access to a variety of power-ups that give him different abilities. Marios fraternal twin brother is Luigi',
        genre: 'actie',
        img: '../img/tarkov.jpeg'


    },
    {
        id:7,
        title: 'gta 5',
        beschrijving: 'red in over 200 video games since his creation. Depicted as a short, pudgy, Italian plumber who resides in the Mushroom Kingdom, his adventures generally center on rescuing Princess Peach from the Koopa villain Bowser. Mario has access to a variety of power-ups that give him different abilities. Marios fraternal twin brother is Luigi',
        genre: 'platform',
        img: '../img/gta5.jpg'


    },
    {
        id:8,
        title: 'super smash ultimate',
        beschrijving: 'red in over 200 video games since his creation. Depicted as a short, pudgy, Italian plumber who resides in the Mushroom Kingdom, his adventures generally center on rescuing Princess Peach from the Koopa villain Bowser. Mario has access to a variety of power-ups that give him different abilities. Marios fraternal twin brother is Luigi',
        genre: 'platform',
        img: '../img/ultimate.jpg'


    },
    {
        id:9,
        title: 'runescape',
        beschrijving: 'red in over 200 video games since his creation. Depicted as a short, pudgy, Italian plumber who resides in the Mushroom Kingdom, his adventures generally center on rescuing Princess Peach from the Koopa villain Bowser. Mario has access to a variety of power-ups that give him different abilities. Marios fraternal twin brother is Luigi',
        genre: 'platform',
        img: '../img/runescape.jpg'


    },
]


for(let i = 0; i < spelGenres.length; i++){
    const spelgen = spelGenres[i];
    showAllGames.innerHTML += `<div class=" col-3 col-md-3 col-sm-12">
    <div class="card" style="width: 18rem;">
    <img src="${spelgen.img}" class="card-img-top" alt="..."> 
    <div class="card-body bg-dark text-white">
      <h5 class="card-title">${spelgen.title}h5>
      <p class="card-text">${spelgen.genre}</p>
      <a href="#" class="btn btn-primary">Klik hier</a>
    </div>
  </div> 
  </div>`
}