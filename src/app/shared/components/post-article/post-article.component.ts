import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RESTApiService } from '../../services/restapi.service';

@Component({
  selector: 'app-post-article',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './post-article.component.html',
  styleUrl: './post-article.component.scss',
  standalone: true
})
export class PostArticleComponent {
  constructor( private restAPI: RESTApiService ) {}

  postInfo: any = new FormGroup({
    name: new FormControl(''),
    shortDescription: new FormControl(''),
    longDescription: new FormControl(''),
    typeOfObject: new FormControl(''),
    price: new FormControl('')
  })


  postForm() {    
    this.restAPI.postArticle(this.postInfo.value).subscribe(() => {
      console.log('Post succeful');
      return window.location.reload();
    })
  }
}
