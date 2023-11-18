import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ArticleComponent } from './pages/article/article.component';
import { ArticlesComponent } from './pages/articles/articles.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'articles',
    component: ArticlesComponent
  },
  {
    path: 'articles/:id',
    component: ArticleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
