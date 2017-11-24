import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-empty-dialog',
  templateUrl: './empty-dialog.component.html',
  styleUrls: ['./empty-dialog.component.css']
})
export class EmptyDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public getdata: any) { }

  ngOnInit() {
  }

}
