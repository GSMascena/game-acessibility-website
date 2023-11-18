import { Component } from '@angular/core';
import { article } from 'src/app/data/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {
  articleDatabase : article[] = []

  constructor (private articleService : ArticleService) {

  }

  ngOnInit() {
    this.articleDatabase = this.articleService.getAllArticles()
  }
}
