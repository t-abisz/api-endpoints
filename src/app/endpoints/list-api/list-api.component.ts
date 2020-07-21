import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DialogComponent} from '../dialog/dialog.component';
import {VersionDiffService} from '../../services/version-diff.service';
import {MainJson} from '../../model/main-json';
import {HttpClient} from '@angular/common/http';
import {MainService} from '../../services/main.service';
import {ImplementationComponent} from '../implementation/implementation.component';
import {EditorComponent} from '../editor/editor.component';


@Component({
  selector: 'app-list-api',
  templateUrl: './list-api.component.html',
  styleUrls: ['./list-api.component.css']
})
export class ListApiComponent implements OnInit {
  overlayOn: boolean;
  panelOpenState = false;
  jsonData: any = null;

  constructor(public dialog: MatDialog, public diffVersion: VersionDiffService, public http: HttpClient, public mainService: MainService) { }



  ngOnInit(): void {
    this.mainService.httpGetList();
    this.mainService.httpGetListObs().subscribe(data => {
      this.jsonData = data;

    });
    this.mainService.getMenuHandler().subscribe(item => {
      this.overlayOn = item;
    });
    this.mainService.httpGetEditor();
  }

  getDiff(name, version) {
    this.diffVersion.getJsonDiff(name, version);
  }
  openDialog(name, version) {
    this.dialog.open(DialogComponent, {
      data: { appName: name, appVersion: version },
    });
  }
  openEditor(name, version) {
    this.dialog.open(EditorComponent, {
      data: { appName: name, appVersion: version },
    });
  }
  openImplementation(uid) {
    this.dialog.open(ImplementationComponent, {
      data: { appUid: uid },
    });
  }
  publish(igroup, iapi, iversion) {
    this.mainService.httpPostPublish(igroup, iapi, iversion);
  }
  closeMenu() {
    this.overlayOn = !this.overlayOn;
    this.mainService.setMenuHandler(this.overlayOn);
  }

}
