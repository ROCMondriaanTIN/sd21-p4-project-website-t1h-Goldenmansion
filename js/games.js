const cardPlek = document.querySelector('.cardPlek');

const gamers = [
    {
        name: 'casey',
        age: 21,
        city: 'new york',
        game: 'call of duty',
        beschrijving: 'casey is een hele goede cod player. hij heeft al meerdere malen biljoenen aan geld binnen gehaald',
        img: '../img/casey.jpeg'
    },
    {
        name: 'rachel',
        age: 21,
        city: 'new york',
        game: 'call of duty',
        beschrijving: 'rachel is een hele goede cod player. hij heeft al meerdere malen biljoenen aan geld binnen gehaald',
        img: '../img/rachel.jpeg'
    },
    {
        name: 'markiplier',
        age: 21,
        city: 'new york',
        game: 'call of duty',
        beschrijving: 'markiplier is een hele goede cod player. hij heeft al meerdere malen biljoenen aan geld binnen gehaald',
        img: '../img/markiplier.png'
    },
    {
        name: 'jackscept',
        age: 21,
        city: 'new york',
        game: 'call of duty',
        beschrijving: 'jacksept is een hele goede cod player. hij heeft al meerdere malen biljoenen aan geld binnen gehaald',
        img: '../img/jacksepticeye.png'

    },
    {
        name: 'enzoknol',
        age: 21,
        city: 'new york',
        game: 'call of duty',
        beschrijving: 'enzoknol is een hele goede cod player. hij heeft al meerdere malen biljoenen aan geld binnen gehaald',
        img: '../img/enzo_knol.jpeg'
    },
];

//const images = ['avatar3.jpg', 'gamers.jpg','pewdiepie.jpg','unknown.jpg','vloggers.jpg']


const rowShower = document.querySelector('.card-row');

for(let i = 0; i < gamers.length; i++){
    const gamerObj = gamers[i];
    rowShower.innerHTML += `
    <div class="col-md-3 col-sm-12">
    <div class="card" style="width: 18rem;">
    <img src="${gamerObj.img}" class="card-img-top" alt="..."> 
    <div class="card-body">
      <h5 class="card-title">${gamerObj.name}</h5>
      <p class="card-text">${gamerObj.beschrijving}</p>
      <a href="#" class="btn btn-primary">Klik hier</a>
    </div>
  </div> 
  </div>`
  
}


