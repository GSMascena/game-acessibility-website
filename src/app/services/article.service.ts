import { Injectable } from '@angular/core';
import { article, htmlElement } from '../data/article';
import { articleDatabase } from '../data/articleDatabase';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private articleDatabase : article[] = []

  constructor() {
    this.articleDatabase = articleDatabase;
  }

  getAllArticles() : article[] {
    return this.articleDatabase
  }

  getArticleContent(id: number) : htmlElement[] {
    console.log(id)
    const article = this.articleDatabase.filter(article => article.articleId == id)
    if (article.length > 0) {
      console.log(id, article[0])
      return article[0].articleHtmlElements
    };
    return [];
  }
}
