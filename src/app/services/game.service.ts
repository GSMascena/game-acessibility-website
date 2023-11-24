import { Injectable } from '@angular/core';
import { htmlElement } from '../data/htmlElement';
import { game } from '../data/game';
import { gameDatabase } from '../data/gameDatabase';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private gameDatabase : game[] = []

  constructor() {
    this.gameDatabase = gameDatabase;
  }

  getAllGames() : game[] {
    return this.gameDatabase
  }

  getGameContent(id: number) : htmlElement[] {
    console.log(id)
    const game = this.gameDatabase.filter(game => game.gameId == id)
    if (game.length > 0) {
      console.log(id, game[0])
      return game[0].gameHtmlElements
    };
    return [];
  }
}
