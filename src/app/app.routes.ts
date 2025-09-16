import { Routes } from '@angular/router';
import { GetArticlesComponent } from './shared/components/get-articles/get-articles.component';
import { UpdateArticlesComponent } from './shared/components/update-articles/update-articles.component';
import { PostArticleComponent } from './shared/components/post-article/post-article.component';
import { GetUserComponent } from './shared/components/get-user/get-user.component';
import { LoginComponent } from './shared/components/login/login.component';

export const routes: Routes = [
    { path: '', component: GetArticlesComponent },
    { path: 'update/articles', component: UpdateArticlesComponent },
    { path: 'update/articles/post', component:PostArticleComponent },
    { path: 'user', component:GetUserComponent },
    { path: 'signIn', component:LoginComponent }
];
