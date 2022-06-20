const rowShower = document.querySelector('.rowShower');

const spelGenres = [
    {
        id:1,
        title: 'mario odessy',
        beschrijving: 'Mario[e] is a character created by Japanese video game designer Shigeru Miyamoto. He is the title character of the Mario franchise and the mascot of Japanese video game company Nintendo. Mario has appeared in over 200 video games since his creation. Depicted as a short, pudgy, Italian plumber who resides in the Mushroom Kingdom, his adventures generally center on rescuing Princess Peach from the Koopa villain Bowser. Mario has access to a variety of power-ups that give him different abilities. Marios fraternal twin brother is Luigi',
        genre: 'avontuur',
        img: '../img/ultimate.jpg'


    },

    {
        id:2,
        title: 'zelda',
        beschrijving: 'The Legend of Zelda[a] is a high fantasy action-adventure video game franchise created by Japanese game designers Shigeru Miyamoto and Takashi Tezuka. It is primarily developed and published by Nintendo, although some portable installments and re-releases have been outsourced to Capcom, Vanpool, and Grezzo. The gameplay incorporates action-adventure and elements of action RPG games.',
        genre: 'avontuur',
        img: '../img/zelda.jpg'


    },

    {
        id:3,
        title: 'kirby',
        beschrijving: 'Kirby (Japanese: カービィ, Hepburn: Kābī, Japanese pronunciation: [kabi]) is a fictional character and the titular protagonist of the Kirby series of video games owned by Nintendo. He first appeared in Kirbys Dream Land 1992, a platform game, for the Game Boy. Originally a placeholder, created by Japanese video game designer Masahiro Sakurai, for the games early development, he has since then starred in over 20 games, ranging from action platformers to puzzle, racing, and even pinball, and has been featured as a playable character in every installment of the Super Smash Bros. series. He has also starred in his own anime and manga series. Since 1999, he has been voiced by Makiko Ohmoto.',
        genre: 'avontuur',
        img: '../img/kirby.jpg'


    },

    {
        id:4,
        title: 'call of duty',
        beschrijving: 'red in over 200 video games since his creation. Depicted as a short, pudgy, Italian plumber who resides in the Mushroom Kingdom, his adventures generally center on rescuing Princess Peach from the Koopa villain Bowser. Mario has access to a variety of power-ups that give him different abilities. Marios fraternal twin brother is Luigi',
        genre: 'actie',
        img: ''


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
        img: ''


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
        genre: 'platform',
        img: ''


    },
    {
        id:9,
        title: 'runescape',
        beschrijving: 'red in over 200 video games since his creation. Depicted as a short, pudgy, Italian plumber who resides in the Mushroom Kingdom, his adventures generally center on rescuing Princess Peach from the Koopa villain Bowser. Mario has access to a variety of power-ups that give him different abilities. Marios fraternal twin brother is Luigi',
        genre: 'platform',
        img: ''


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
