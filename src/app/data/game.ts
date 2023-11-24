import { htmlElement } from "./htmlElement"

export type game = {
  gameId : number,
  gameCover: string,
  gameTitle : string,
  gameHtmlElements: htmlElement[]
}
