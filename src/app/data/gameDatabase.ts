import { game } from "./game";

export const gameDatabase: game[] = [
  {
    gameId: 1,
    gameCover: "https://i.imgur.com/RBzGsZG.jpg",
    gameTitle: "Watch Dogs",
    gameHtmlElements: [{
      elementType: 'h2',
      elementContent: 'Watch Dogs'
    },
    {
      elementType: 'img',
      elementContent: 'https://i.imgur.com/RBzGsZG.jpg'
    },
    {
      elementType: 'p',
      elementContent: 'Quando a ubisoft vai aprender que um jogo sem acessibilidade é tão ruim quanto um jogo bugado?'
    }]
  },
  {
    gameId: 2,
    gameCover: "https://i.imgur.com/sC8JE7P.png",
    gameTitle: "The Last of Us II",
    gameHtmlElements: [{
      elementType: 'h2',
      elementContent: 'The Last of Us Part II'
    },
    {
      elementType: 'img',
      elementContent: 'https://i.imgur.com/sC8JE7P.png'
    },
    {
      elementType: 'p',
      elementContent: 'Novamente a naughty dog se supera trazendo mais acessibilidade para o mundo dos jogos.'
    }]
  },
]
