import { Component } from '@angular/core';
import { RESTApiService } from '../../services/restapi.service';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, NgForm, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-article',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './post-article.component.html',
  styleUrl: './post-article.component.scss'
})
export class PostArticleComponent {
  constructor (private restAPI: RESTApiService) {}
  formData = new FormGroup({
    name: new FormControl(''),
    shortDescription: new FormControl(''),
    longDescription: new FormControl(''),
    typeOfObject: new FormControl(''),
    price: new FormControl('')
  })
  postArticle() {
      console.log(this.formData);
      this.restAPI.postArticle(this.formData.value).subscribe(() =>{})
  }
}
