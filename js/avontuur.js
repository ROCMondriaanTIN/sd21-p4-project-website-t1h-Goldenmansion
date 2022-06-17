const rowShower = document.querySelector('.rowShower');

const spelGenres = [
    {
        id:1,
        title: 'mario odessy',
        beschrijving: 'Mario[e] is a character created by Japanese video game designer Shigeru Miyamoto. He is the title character of the Mario franchise and the mascot of Japanese video game company Nintendo. Mario has appeared in over 200 video games since his creation. Depicted as a short, pudgy, Italian plumber who resides in the Mushroom Kingdom, his adventures generally center on rescuing Princess Peach from the Koopa villain Bowser. Mario has access to a variety of power-ups that give him different abilities. Marios fraternal twin brother is Luigi',
        genre: 'avontuur'


    },

    {
        id:2,
        title: 'zelda',
        beschrijving: 'Mario[e] is a character created by Japanese video game designer Shigeru Miyamoto. He is the title character of the Mario franchise and the mascot of Japanese video game company Nintendo. Mario has appeared in over 200 video games since his creation. Depicted as a short, pudgy, Italian plumber who resides in the Mushroom Kingdom, his adventures generally center on rescuing Princess Peach from the Koopa villain Bowser. Mario has access to a variety of power-ups that give him different abilities. Marios fraternal twin brother is Luigi',
        genre: 'avontuur'


    },

    {
        id:3,
        title: 'kirby',
        beschrijving: 'Mario[e] is a character created by Japanese video game designer Shigeru Miyamoto. He is the title character of the Mario franchise and the mascot of Japanese video game company Nintendo. Mario has appeared in over 200 video games since his creation. Depicted as a short, pudgy, Italian plumber who resides in the Mushroom Kingdom, his adventures generally center on rescuing Princess Peach from the Koopa villain Bowser. Mario has access to a variety of power-ups that give him different abilities. Marios fraternal twin brother is Luigi',
        genre: 'avontuur'


    },

    {
        id:4,
        title: 'call of duty',
        beschrijving: 'red in over 200 video games since his creation. Depicted as a short, pudgy, Italian plumber who resides in the Mushroom Kingdom, his adventures generally center on rescuing Princess Peach from the Koopa villain Bowser. Mario has access to a variety of power-ups that give him different abilities. Marios fraternal twin brother is Luigi',
        genre: 'actie'


    },
    {
        id:5,
        title: 'destiny',
        beschrijving: 'red in over 200 video games since his creation. Depicted as a short, pudgy, Italian plumber who resides in the Mushroom Kingdom, his adventures generally center on rescuing Princess Peach from the Koopa villain Bowser. Mario has access to a variety of power-ups that give him different abilities. Marios fraternal twin brother is Luigi',
        genre: 'actie'


    },
    {
        id:6,
        title: 'tarkov',
        beschrijving: 'red in over 200 video games since his creation. Depicted as a short, pudgy, Italian plumber who resides in the Mushroom Kingdom, his adventures generally center on rescuing Princess Peach from the Koopa villain Bowser. Mario has access to a variety of power-ups that give him different abilities. Marios fraternal twin brother is Luigi',
        genre: 'actie'


    },
    {
        id:7,
        title: 'gta 5',
        beschrijving: 'red in over 200 video games since his creation. Depicted as a short, pudgy, Italian plumber who resides in the Mushroom Kingdom, his adventures generally center on rescuing Princess Peach from the Koopa villain Bowser. Mario has access to a variety of power-ups that give him different abilities. Marios fraternal twin brother is Luigi',
        genre: 'platform',
        img: '../pewdiepie.jpg'


    },
    {
        id:8,
        title: 'super smash ultimate',
        beschrijving: 'red in over 200 video games since his creation. Depicted as a short, pudgy, Italian plumber who resides in the Mushroom Kingdom, his adventures generally center on rescuing Princess Peach from the Koopa villain Bowser. Mario has access to a variety of power-ups that give him different abilities. Marios fraternal twin brother is Luigi',
        genre: 'platform'


    },
    {
        id:9,
        title: 'runescape',
        beschrijving: 'red in over 200 video games since his creation. Depicted as a short, pudgy, Italian plumber who resides in the Mushroom Kingdom, his adventures generally center on rescuing Princess Peach from the Koopa villain Bowser. Mario has access to a variety of power-ups that give him different abilities. Marios fraternal twin brother is Luigi',
        genre: 'platform'


    },
]



for(let i = 0; i < spelGenres.length -6; i++){
    const spelgenre = spelGenres[i];

    rowShower.innerHTML += `<div class="col-md-3 col-sm-12">
    <div class="card" style="width: 18rem;">
    <img src="${spelgenre.img}" class="card-img-top" alt="..."> 
    <div class="card-body">
      <h5 class="card-title">${spelgenre.title}h5>
      <p class="card-text">${spelgenre.beschrijving}</p>
      <a href="#" class="btn btn-primary">Klik hier</a>
    </div>
  </div> 
  </div>`
}
