import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GetArticlesComponent } from './shared/components/get-articles/get-articles.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
