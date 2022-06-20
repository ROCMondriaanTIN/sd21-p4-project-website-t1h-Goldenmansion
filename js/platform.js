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

for (let i = 0 ; i < platformgames.length; i++) {
    const games = platformgames[i];
    showPlatformGames.innerHTML += `<div class="col-lg-4">
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