import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpClient ) { }

  public getUsers() {
    let url = "http://localhost:8080/users";
    return this.http.get(url);
  }
  public userSignUp(user: Object) {
    let url = "http://localhost:8080/users";
    return this.http.post(url, user);
  }
}
