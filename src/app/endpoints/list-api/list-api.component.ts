import { Component, OnInit } from '@angular/core';
// @ts-ignore
import tmp from '../../../assets/jsonData/tmp.json';

@Component({
  selector: 'app-list-api',
  templateUrl: './list-api.component.html',
  styleUrls: ['./list-api.component.css']
})
export class ListApiComponent implements OnInit {
  panelOpenState = false;
  jsonData: any = tmp;
  constructor() { }

  ngOnInit(): void {
  }

}
