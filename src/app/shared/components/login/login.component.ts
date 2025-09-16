import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/users.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor (private router: Router, private userService: UserService) {}

  loggedIn: boolean = false;
  signUpObject: SignUpModel = new SignUpModel();
  signInObject: SignInModel = new SignInModel();

  user: any = null;
  userInfo: any = null;

  onSignUp() {
    return this.userService.userSignUp(this.signUpObject).subscribe(data => {
        this.user = data
        alert('Sign Up Successful');
        window.location.reload();
      });
  }
  onSignIn() {
    const users = this.userService.getUsers().subscribe(data => {
      this.userInfo = data;
    })
    setTimeout(() => {
      if(this.userInfo != null) {
        const isUserPresent = this.userInfo.find((user: SignInModel) => user.username == this.signInObject.username && user.password == this.signInObject.password);
        if (isUserPresent != undefined) {
          localStorage.setItem('loggedUser', JSON.stringify(isUserPresent));
          alert("User Found!")               
          this.router.navigateByUrl('/user');
        } else {
          alert("User Not Found!")
        }
      } else {
        console.log(this.userInfo);
        alert("No users are Signed Up")
      }
    }, 500)
  }
}
export class SignUpModel {
  username: string;
  password: string;

  constructor() {
    this.username = "";
    this.password = "";
  }
}
export class SignInModel {
  username: string;
  password: string;

  constructor() {
    this.username = "";
    this.password = "";
  }
}
