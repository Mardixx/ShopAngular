import { CommonModule, NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RESTApiService } from '../../services/restapi.service';
import { FormsModule } from '@angular/forms';
import { FilterArticlesPipe } from '../../pipes/filter-articles.pipe';

@Component({
  selector: 'app-get-articles',
  imports: [CommonModule, NgFor, FormsModule, FilterArticlesPipe],
  templateUrl: './get-articles.component.html',
  styleUrl: './get-articles.component.scss'
})
export class GetArticlesComponent {

  constructor (private RESTApi: RESTApiService) { }

  information: any = '';
  searchTerm = signal('');

  ngOnInit() {
    this.onGetArticles();
  }

  onGetArticles() {
    this.RESTApi.getArticles().subscribe(data => {
      this.information = data;
    });
  }
}
