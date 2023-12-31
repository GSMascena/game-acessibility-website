import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article-small-card',
  templateUrl: './article-small-card.component.html',
  styleUrls: ['./article-small-card.component.css']
})
export class ArticleSmallCardComponent {
  @Input() articleCardImg : string = ""
  @Input() articleCardImgAlt : string = ""
  @Input() articleCardTitle : string = ""
  @Input() articleCardDescription : string = ""
}
