import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(public Login: LoginService, private router: Router) {
  }

  login(username, password) {
    this.Login.login(username, password)
      .then((res) => {
      if  (res) {
        this.router.navigate(['/dashboard'])
      }});
  }

  ngOnInit() {
  }

}
