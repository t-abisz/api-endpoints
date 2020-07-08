import { Component, OnInit } from '@angular/core';
// @ts-ignore
import tmp from '../../../assets/jsonData/tmp.json';
import {MatDialog} from '@angular/material/dialog';
import {DialogComponent} from '../dialog/dialog.component';
import {VersionDiffService} from '../../services/version-diff.service';

@Component({
  selector: 'app-list-api',
  templateUrl: './list-api.component.html',
  styleUrls: ['./list-api.component.css']
})
export class ListApiComponent implements OnInit {
  panelOpenState = false;
  jsonData: any = tmp;
  cipa: any = null;
  constructor(public dialog: MatDialog, public diffVersion: VersionDiffService) { }

  ngOnInit(): void {
  }
  getDiff() {
    this.diffVersion.getJsonDiff();
  }
  openDialog() {
    this.dialog.open(DialogComponent);
  }

}
