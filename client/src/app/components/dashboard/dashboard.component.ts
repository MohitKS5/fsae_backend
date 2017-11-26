import {Component, OnInit} from '@angular/core';
import {SheetsService} from '../../services/sheets.service';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';
import {sheetpages} from '../../config/firebase';
import {MatDialog} from '@angular/material';
import {EmptyDialogComponent} from '../dialogs/empty-dialog/empty-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public sheet;
  public unique_identifier = sheetpages;

  constructor(private data: SheetsService, public Login: LoginService, private router: Router, private dialog: MatDialog) {
  }

  getData() {
    for (let v in this.unique_identifier) {
      this.data.getSheetsData(this.unique_identifier[+v].toString())
        .subscribe(
          res => {
            this.sheet = res;
            this.data.testin(res, 'data/' + this.unique_identifier[+v].toString());
          }
        );
    }
    this.dialog.open(EmptyDialogComponent,{
      data: {msg: 'The Changes have been made to main website'}
    })
  }

  Signout() {
    this.Login.signout();
    this.router.navigate(['/login']);
  }

  ngOnInit() {
  }
}
