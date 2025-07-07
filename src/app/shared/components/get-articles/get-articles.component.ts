import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RESTApiService } from '../../services/restapi.service';

@Component({
  selector: 'app-get-articles',
  imports: [CommonModule, NgFor],
  templateUrl: './get-articles.component.html',
  styleUrl: './get-articles.component.scss'
})
export class GetArticlesComponent {

  constructor (private RESTApi: RESTApiService) { }

  information: any = "";

  ngOnInit() {
    this.onGetArticles();
  }

  onGetArticles() {
    this.RESTApi.getArticles().subscribe(data => {
      this.information = data;
    });
  }
}
