import { Component, OnInit } from '@angular/core';
import {MainService} from '../../services/main.service';
import {Menu} from '../../model/menu';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public menu = {
    data: [
      {
        branchPath: '',
        code: '',
        name: '',
        parentProjectName: null,
        revisionCreatedFrom: null,
        lastPushedRevision: null
      },
      {
        branchPath: '',
        code: '',
        name: '',
        parentProjectName: null,
        revisionCreatedFrom: null,
        lastPushedRevision: null
      },
      {
        branchPath: '',
        code: '',
        name: '',
        parentProjectName: null,
        revisionCreatedFrom: null,
        lastPushedRevision: null
      }
    ]
  };

  isData = false;
  open = false;
  subscription: Subscription;
  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    this.mainService.httpGetMenu();
    this.subscription = this.mainService.httpGetMenuObs().subscribe((menuItems) => {
      this.menu = menuItems;
      console.log(this.menu);
      this.isData = true;
    });
  }
  openMenu() {
    this.open = !this.open;
  }
  changeView(projectCode) {
    this.mainService.httpPostMenu(projectCode);
  }
}
