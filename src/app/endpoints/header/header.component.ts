import { Component, OnInit } from '@angular/core';
import {MainService} from '../../services/main.service';
import {Menu} from '../../model/menu';
import {Subscription} from 'rxjs';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations :[
    trigger('openMenu', [
      state('open', style({
        transform: 'scale(1)',
        transformOrigin: 'top right'
        }
      )),
      state('closed', style({
        transform: 'scale(0)',
        transformOrigin: 'top right'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ] )
  ]
})
export class HeaderComponent implements OnInit {
  public menu: Menu = {
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
  public objectSend;
  isOpen = false;
  subscription: Subscription;
  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    this.mainService.httpGetMenu();
    this.subscription = this.mainService.httpGetMenuObs().subscribe((menuItems) => {
      this.menu = menuItems;
    });
  }
  openMenu() {
    this.isOpen = !this.isOpen;
  }
  changeView(itemCode) {
    this.objectSend = {
      projectCode: itemCode
    };
    this.mainService.httpPostMenu(this.objectSend);
    this.mainService.httpGetList();
  }
}
