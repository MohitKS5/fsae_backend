import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {EmptyDialogComponent} from '../dialogs/empty-dialog/empty-dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private Login: LoginService, private router: Router, private dialog: MatDialog) {
  }

  login(username, password) {
    this.Login.login(username, password)
      .then((res) => {
        if (res) {
          this.router.navigate(['/dashboard'])
        }
      })
      .catch((err) => {
        this.dialog.open(EmptyDialogComponent, {
          data: {msg: err}
        })
      });
  }

  google() {
    this.Login.google_signin()
      .then(() => {
          this.router.navigate(['/dashboard'])
      });
  }

  ngOnInit() {
  }

}
