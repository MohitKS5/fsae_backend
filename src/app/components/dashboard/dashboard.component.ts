import {Component, OnInit} from '@angular/core';
import {SheetsService} from '../../services/sheets.service';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';
import {sheetpages} from '../../config/firebase';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public sheet;
  public unique_identifier = sheetpages;

  constructor(private data: SheetsService, public Login: LoginService, private router: Router) {
  }

  getData() {
    for (let v in this.unique_identifier) {
      this.data.getSheetsData(v.toString())
        .subscribe(
          res => {
            this.sheet = res;
            this.data.testin(res, v);
          }
        );
    }
    alert('done');
  }

  Signout() {
    this.Login.signout();
    this.router.navigate(['/login']);
  }

  ngOnInit() {
  }

}
