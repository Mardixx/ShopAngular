import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form, FormGroup, NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RESTApiService {

  constructor(private http: HttpClient) { }

  public getArticles() {
    let url = "http://localhost:8080/articles";
    return this.http.get(url);
  }
  public postArticle(form: any) {
    let url = "http://localhost:8080/articles";
    return this.http.post(url, form);
  }
  public updateArticle(updatedObject: Object, id: number) {
    let url = "http://localhost:8080/articles/" + id;
    return this.http.put(url, updatedObject);
  }
}
