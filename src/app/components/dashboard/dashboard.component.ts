import { Component, OnInit } from '@angular/core';
import {SheetsService} from '../../services/sheets.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public sheet;
  public unique_identifier = [1, 2, 3, 4, 5, 6];
  constructor(private data: SheetsService) { }
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
  }

  ngOnInit() {
  }

}
