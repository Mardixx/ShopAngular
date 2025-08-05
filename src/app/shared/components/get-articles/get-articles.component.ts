import { CommonModule, NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ArticlesService } from '../../services/articles.service';
import { FormsModule } from '@angular/forms';
import { FilterArticlesPipe } from '../../pipes/filter-articles.pipe';

@Component({
  selector: 'app-get-articles',
  imports: [CommonModule, FormsModule, FilterArticlesPipe],
  templateUrl: './get-articles.component.html',
  styleUrl: './get-articles.component.scss'
})
export class GetArticlesComponent {

  constructor (private articlesService: ArticlesService) { }

  information: any = '';
  searchTerm = signal('');

  ngOnInit() {
    this.onGetArticles();
  }

  onGetArticles() {
    this.articlesService.getArticles().subscribe(data => {
      this.information = data;
    });
  }
}
