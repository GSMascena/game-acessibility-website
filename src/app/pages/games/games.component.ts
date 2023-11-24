import { Component } from '@angular/core';
import { game } from 'src/app/data/game';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent {
  gameDatabase : game[] = []

  constructor(private gameService : GameService) {

  }

  ngOnInit() {
    this.gameDatabase = this.gameService.getAllGames()
  }
}
