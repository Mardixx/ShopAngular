import { Routes } from '@angular/router';
import { LoginComponent } from './shared/components/login/login.component';
import { GetArticlesComponent } from './shared/components/get-articles/get-articles.component';

export const routes: Routes = [
    { path: '', component: GetArticlesComponent },
    { path: 'auth/login', component: LoginComponent },
];
