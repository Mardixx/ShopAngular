import { Routes } from '@angular/router';
import { GetArticlesComponent } from './shared/components/get-articles/get-articles.component';
import { UpdateArticlesComponent } from './shared/components/update-articles/update-articles.component';
import { PostArticleComponent } from './shared/components/post-article/post-article.component';

export const routes: Routes = [
    { path: '', component: GetArticlesComponent },
    { path: 'update/articles', component: UpdateArticlesComponent },
    { path: 'update/articles/post', component:PostArticleComponent }
];
