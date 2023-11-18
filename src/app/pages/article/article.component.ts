import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { articleElement } from 'src/app/data/article';
import { ArticleService } from 'src/app/services/article.service';
import { IntParserService } from 'src/app/services/int-parser.service'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  articleElements: articleElement[] = []

  constructor (
    private route: ActivatedRoute,
    private intParser : IntParserService,
    private articleService : ArticleService) {

  }

  ngOnInit() {
    const paramId =  this.route.snapshot.paramMap.get('id');

    const parsedInt = this.intParser.tryParseInt(paramId)

    this.articleElements = this.articleService.getArticleContent(parsedInt)
  }
}
