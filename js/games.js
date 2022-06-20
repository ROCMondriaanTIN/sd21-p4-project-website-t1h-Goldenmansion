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
        </div>
        <ul class="list-group list-group-flush">
        <a href="/paginas/actie.html"><li class="list-group-item">${games.genre}</li></a>
        </ul>
      </div>
</div>`
}

const showAvontuurGames = document.querySelector(".avontuurgames-pagina");

const avontuurgames = [
    {
        title:"Last Labyrinth",
        description:"An escape-the-room adventure game that can only be experienced in VR, Last Labyrinth was created specifically for the VR age. Players must work to escape a mansion full of hidden dangers with a mysterious girl that appears before them. The playable character is strapped to a wheelchair, unable to move. The only things you can move are your head and fingers. The game is therefore controlled only by movement of the head and pushing a button.",
        genre:"avontuur",
        img:"../img/avontuur/Last Labyrinth.webp",
    },

    {
        title:"Catie in MeowmeowLand",
        description:"As Catie follows a strange White Cat in her garden, she suddenly finds herself in the mysterious world of MeowmeowLand, where she has to undertake a journey to find her way back home.",
        genre:"avontuur",
        img:"../img/avontuur/Catie in MeowmeowLand.jpg",
    },

    {
        title:"Magnus Failure",
        description:"For unknown reasons the protagonist finds himself completely isolated from other people. He scans the radio in search of a signal. The appearance of a seemingly incomprehensible message starts your journey through the mysterious world of signs, symbols and clues.",
        genre:"avontuur",
        img:"../img/avontuur/Magnus Failure.jpg",
    },
]

for (let x = 0 ; x < avontuurgames.length; x++) {
    const games = avontuurgames[x];
    showAvontuurGames.innerHTML += `<div class="col-lg-4">
    <div class="card" style="width: 20rem;">
        <img src="${games.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${games.title}</h5>
        </div>
        <ul class="list-group list-group-flush">
        <a href="/paginas/avontuur.html"><li class="list-group-item">${games.genre}</li></a>
        </ul>
      </div>
</div>`
}

const showPlatformGames = document.querySelector(".platformgames-pagina");

const platformgames = [
    {
        title:"Freud’s Bones",
        description:"Freud’s Bones pays homage to the birth of psychoanalysis and its founder, addressing the themes of sexuality and neuroses filled with existential doubts. Let your patients lay down on the most famous couch of all time and confess their secrets, their obscene fantasies, their most painful traumas… help them find themselves!",
        genre:"platform",
        img:"../img/platform/Freud’s Bones.jpg",
    },

    {
        title:"Inked",
        description:"Inked is a tale of love and redemption told in ink and paper. In this story-driven puzzle game, the players will play as the Nameless Hero who sets out on a journey in a vast and beautiful landscape filled with puzzles for them to solve. Each puzzle takes the players closer to their lost love, unraveling a story that’s heart-warming and enchanting.",
        genre:"platform",
        img:"../img/platform/Inked.jpg",
    },

    {
        title:"Dexter Stardust: Adventures in Outer Space",
        description:"Dexter Stardust barely escaped when the Vreesians, inhabitants of the menacing Planet X, sent a fleet of robots to destroy all life on Earth. Now, twenty years later, a mechanical man from the 10th planet seeks to communicate with Dexter a very important message - he is the key to saving both humans and Vreesians! Play the taco-loving Dexter Stardust as he, and his good friend Aurora, go on the greatest adventure of their lives and discover the mystery of the Robot from the Planet X!",
        genre:"platform",
        img:"../img/platform/Dexter Stardust.jpg",
    },
]

for (let y = 0 ; y < platformgames.length; y++) {
    const games = platformgames[y];
    showPlatformGames.innerHTML += `<div class="col-lg-4">
    <div class="card" style="width: 20rem;">
        <img src="${games.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${games.title}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <a href="/paginas/platform.html"><li class="list-group-item">${games.genre}</li></a>
        </ul>
      </div>
</div>`
}