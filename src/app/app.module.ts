import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ArticleComponent } from './pages/article/article.component';
import { ArticleElementComponent } from './components/article-element/article-element.component';
import { ArticleSmallCardComponent } from './components/article-small-card/article-small-card.component';
import { ArticlesComponent } from './pages/articles/articles.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ArticleComponent,
    ArticleElementComponent,
    ArticleSmallCardComponent,
    ArticlesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
