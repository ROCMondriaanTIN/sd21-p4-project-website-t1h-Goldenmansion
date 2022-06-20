const showActieGames = document.querySelector(".actiegames-pagina");

const actiegames = [
    {
        title:"NORCO",
        description:"A post-noir point-and-click exploration of the industrial swamplands and decaying suburbs of South Louisiana. You return to your hometown to settle your dead mother’s estate only to discover that your brother has gone missing. Accompanied by a fugitive security cyborg that your mother harbored for almost a decade, you must venture into a conspiratorial underworld hidden throughout the swamps, refineries, and abandoned strip malls of suburban New Orleans to decipher the strange clues that point to your brother’s whereabouts.",
        genre:"actie",
        img:"../img/actie/NORCO.jpg",
    },

    {
        title:"Growbot",
        description:"Nara is a student growbot on her first day of captaincy training on board a space station. Before she can learn more about her new home’s ecosystem of alien flowers and strange creatures, an attack by an unknown force infests the station with large and quickly growing crystals. Communication is cut off, and so she ventures out of her room in search of her captain. Along the way, she must make new friends, fix the station’s strange machinery, and discover the origins of the crystalline force spreading throughout the station.",
        genre:"actie",
        img:"../img/actie/Growbot.jpg",
    },

    {
        title:"Infidel",
        description:"There's an old Egyptian fable that tells how a sacrilegious camel once dined on a high priest's pocket watch, only to awake in the morning with a bellyful of ticks. The moral, needless to say, is that one should never bite off more than one can stomach. Evidently, you failed to heed this wisdom -- else why would you, a small-time explorer, dare to brave the smouldering heart of the Egyptian desert in search of a great lost pyramid?",
        genre:"actie",
        img:"../img/actie/Infidel.jpeg",
    },
]

for (let i = 0 ; i < actiegames.length; i++) {
    const games = actiegames[i];
    showActieGames.innerHTML += `<div class="col-lg-4">
    <div class="card" style="width: 20rem;">
        <img src="${games.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${games.title}</h5>
          <p class="card-text">${games.description}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${games.genre}</li>
        </ul>
      </div>
</div>`
}