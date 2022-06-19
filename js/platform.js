
const platformRow = document.querySelector('.platformRow');

const spelGenres = [
   
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
    const genres = spelGenres[i];
    platformRow.innerHTML += `<div class="col-md-3 col-sm-12">
    <div class="card" style="width: 18rem;">
    <img src="${genres.img}" class="card-img-top" alt="..."> 
    <div class="card-body">
      <h5 class="card-title">${genres.title}h5>
      <p class="card-text">${genres.beschrijving}</p>
      <a href="#" class="btn btn-primary">Klik hier</a>
    </div>
  </div> 
  </div>`
}