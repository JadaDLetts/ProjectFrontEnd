import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../services/UserService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  login(username, password) {
    console.log(username);
    console.log(password);

    // this.userService.login(this.username, this.password)
    //   .then(user => {
    //     this.router.navigate(['profile']);
    //   });

    // if (this.username === 'bob' && this.password === 'hope') {
    //   this.router.navigate(['profile']);
    // } else {
    //   this.message = 'Sorry, try again';
    // }
  }
}
