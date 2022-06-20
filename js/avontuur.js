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

for (let i = 0 ; i < avontuurgames.length; i++) {
    const games = avontuurgames[i];
    showAvontuurGames.innerHTML += `<div class="col-lg-4">
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