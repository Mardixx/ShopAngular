import { Routes } from '@angular/router';
import { GetArticlesComponent } from './shared/components/get-articles/get-articles.component';
import { LoginComponent } from './shared/auth/login/login.component';
import { UpdateArticlesComponent } from './shared/components/update-articles/update-articles.component';

export const routes: Routes = [
    { path: '', component: GetArticlesComponent },
    { path: 'auth/login', component: LoginComponent },
    { path: 'update/articles', component: UpdateArticlesComponent },
];
