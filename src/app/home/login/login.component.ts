import { Component, OnInit } from '@angular/core';
import { User } from './user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User = { userName: '', password: ''};

  constructor() {}

  ngOnInit(): void {
  }

  login() {
    console.log(this.user);
  }

}
