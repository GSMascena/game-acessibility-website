import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { htmlElement } from 'src/app/data/htmlElement';
import { GameService } from 'src/app/services/game.service';
import { IntParserService } from 'src/app/services/int-parser.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  htmlElements : htmlElement[] = []

  constructor(private route: ActivatedRoute,
    private intParser: IntParserService,
    private gameService: GameService) {

  }

  ngOnInit() {
    const paramId =  this.route.snapshot.paramMap.get('id');

    const parsedInt = this.intParser.tryParseInt(paramId)

    this.htmlElements = this.gameService.getGameContent(parsedInt)
  }
}
