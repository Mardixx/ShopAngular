import { Component } from '@angular/core';
import { UserService } from '../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-user',
  imports: [],
  templateUrl: './get-user.component.html',
  styleUrl: './get-user.component.scss'
})
export class GetUserComponent {
  loggedUser: any = "";
  constructor ( private userService: UserService, private router: Router ) { 
    const data = localStorage.getItem('loggedUser');
    if(data != null) {
      this.loggedUser = JSON.parse(data);
    }
  }

  userInfo: any = '';

  ngOnInit() {
    this.onGetUsers();
  }

  onGetUsers() {
    this.userInfo = this.loggedUser;
  }

  onLogout() {
    localStorage.removeItem('loggedUser');
    this.router.navigateByUrl('/')
  }
}
