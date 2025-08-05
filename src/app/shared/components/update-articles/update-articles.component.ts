import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ArticlesService } from '../../services/articles.service';

@Component({
  selector: 'app-update-articles',
  imports: [CommonModule, NgFor],
  templateUrl: './update-articles.component.html',
  styleUrl: './update-articles.component.scss'
})
export class UpdateArticlesComponent {

  constructor (private articles: ArticlesService) { }

  information: any = "";
  

  ngOnInit() {
    this.onGetArticles();
  }

  onGetArticles() {
    this.articles.getArticles().subscribe(data => {
      this.information = data;
    });
  }
  
  updateArticle(id: number, info: any, event: Event) {
    var clickTarget = event.target as HTMLBodyElement;
    var infoToUpdate = clickTarget.parentNode;
    var price = infoToUpdate?.childNodes[1].childNodes[0].textContent;
    var name = infoToUpdate?.childNodes[2].textContent;
    var shortDescription = infoToUpdate?.childNodes[3].textContent;
    var typeOfObject = infoToUpdate?.children[4].childNodes[1].textContent;

    info.price = price
    info.name = name;
    info.shortDescription = shortDescription;
    info.typeOfObject = typeOfObject;
    
    this.articles.updateArticle(info, id).subscribe(() => {
      window.location.reload();
    })
  }
}
