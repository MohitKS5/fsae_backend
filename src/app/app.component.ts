import {Component} from '@angular/core';
import {SheetsService} from './services/sheets.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public sheet;
  public unique_identifier = '1';

  getData() {
    this.data.getSheetsData(this.unique_identifier)
      .subscribe(
        res => {
          this.sheet = res;
          this.data.testin(res, 1);
        }
      );
    this.data.getSheetsData(2)
      .subscribe(
        res => {
          this.sheet = res;
          this.data.testin(res, 2);
        }
      );
    this.data.getSheetsData(3)
      .subscribe(
        res => {
          this.sheet = res;
          this.data.testin(res, 3);
        }
      );
    this.data.getSheetsData(4)
      .subscribe(
        res => {
          this.sheet = res;
          this.data.testin(res, 4);
        }
      );
    this.data.getSheetsData(5)
      .subscribe(
        res => {
          this.sheet = res;
          this.data.testin(res, 5);
        }
      );
    this.data.getSheetsData(6)
      .subscribe(
        res => {
          this.sheet = res;
          this.data.testin(res, 6);
        }
      );
    this.data.getSheetsData(7)
      .subscribe(
        res => {
          this.sheet = res;
          this.data.testin(res, 7);
        }
      );
  }

  constructor(private data: SheetsService) {
    this.getData();
  }
}
