import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DialogComponent} from '../dialog/dialog.component';
import {VersionDiffService} from '../../services/version-diff.service';
import {MainJson} from '../../model/main-json';
import {HttpClient} from '@angular/common/http';
import {MainService} from '../../services/main.service';
import {ImplementationComponent} from '../implementation/implementation.component';

@Component({
  selector: 'app-list-api',
  templateUrl: './list-api.component.html',
  styleUrls: ['./list-api.component.css']
})
export class ListApiComponent implements OnInit {
  panelOpenState = false;
  jsonData: any = null;
  constructor(public dialog: MatDialog, public diffVersion: VersionDiffService, public http: HttpClient, public mainService: MainService) { }

  ngOnInit(): void {
    this.mainService.httpGetList();
    this.mainService.httpGetListObs().subscribe(data => {
      this.jsonData = data;
    });
   /* this.http.get<{ json: MainJson }>('http://localhost:8080/api/v1/data').subscribe( (data) => {
      this.jsonData = data;
      console.log(data['data']);
    });*/
  }
  /*ngOnInit(): void {
    this.http.get<{ json: MainJson }>(this.diffVersion.url + 'tmp.json').subscribe( (data) => {
      this.jsonData = data;
      console.log(data);
    });
  }*/
  getDiff(name, version) {
    this.diffVersion.getJsonDiff(name, version);
  }
  openDialog() {
    this.dialog.open(DialogComponent);
  }
  openImplementation() {
    // this.implementation.getimplementation();
    this.dialog.open(ImplementationComponent);
  }
  publish(xsx) {
    this.mainService.httpPostPublish(xsx);
  }

}
