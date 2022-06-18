const rowShowerActie = document.querySelector('.rowShowActie');

const spelgen = [
 

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
        img: ''


    },
    {
        id:6,
        title: 'tarkov',
        beschrijving: 'red in over 200 video games since his creation. Depicted as a short, pudgy, Italian plumber who resides in the Mushroom Kingdom, his adventures generally center on rescuing Princess Peach from the Koopa villain Bowser. Mario has access to a variety of power-ups that give him different abilities. Marios fraternal twin brother is Luigi',
        genre: 'actie',
        img: '../img/'


    },

]

for(let i = 0; i < spelgen.length; i++){
    const spelgens = spelgen[i];
    
        rowShowerActie.innerHTML += `<div class="col-md-3 col-sm-12">
        <div class="card" style="width: 18rem;">
        <img src="${spelgens.img}" class="card-img-top" alt="..."> 
        <div class="card-body">
          <h5 class="card-title">${spelgens.title}h5>
          <p class="card-text">${spelgens.beschrijving}</p>
          <a href="#" class="btn btn-primary">Klik hier</a>
        </div>
      </div> 
      </div>`
    
}