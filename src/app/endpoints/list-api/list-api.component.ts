import { Component, OnInit } from '@angular/core';
// @ts-ignore
import tmp from '../../../assets/jsonData/tmp.json';
import {MatDialog} from '@angular/material/dialog';
import {DialogComponent} from '../dialog/dialog.component';

@Component({
  selector: 'app-list-api',
  templateUrl: './list-api.component.html',
  styleUrls: ['./list-api.component.css']
})
export class ListApiComponent implements OnInit {
  panelOpenState = false;
  jsonData: any = tmp;
  constructor(public dialog: MatDialog ) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(DialogComponent);
  }

}
