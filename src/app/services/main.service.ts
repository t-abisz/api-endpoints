import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Menu} from '../model/menu';
import {Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MainService {
  private menu: any;
  private menuObs = new Subject<Menu>();

  constructor(private http: HttpClient) { }
 // menu services
  httpGetMenu() {
    return this.http.get<{ menu: Menu }>('../../assets/jsonData/projects.json')
      .subscribe( (data) => {
        this.menu = data;
        this.menuObs.next(this.menu);
      });
  }
  httpGetMenuObs() {
    return this.menuObs.asObservable();
  }
  httpPostMenu(projectCode) {
    this.http.post('http://localhost:3000/api/' + projectCode, 'co tu wysyłac').subscribe((answ) => {
      console.log(answ);
    });
  }
  // main
  httpPostPublish() {
    this.http.post('http://localhost:8080/api/v1/publish/HAL/Resource_Pool_Management/1.0.0-master', '' );
  }
}

