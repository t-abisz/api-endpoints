import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Menu} from '../model/menu';
import {Subject} from 'rxjs';
import {MainJson} from '../model/main-json';


@Injectable({
  providedIn: 'root'
})
export class MainService {
  private menu: any;
  private menuObs = new Subject<Menu>();

  private listApi: any;
  private listApiObs = new Subject<MainJson>();

  constructor(private http: HttpClient) { }
 // menu services
  httpGetMenu() {
    return this.http.get<{ menu: Menu }>('http://localhost:8080/api/v1/project')
      .subscribe( (data) => {
        this.menu = data;
        this.menuObs.next(this.menu);
      });
  }
  httpGetMenuObs() {
    return this.menuObs.asObservable();
  }
  httpPostMenu(projectCode) {
    this.http.post('http://localhost:8080/api/v1/project', projectCode).subscribe((answ) => {
      this.listApi = answ;
      this.listApiObs.next(this.listApi);
      console.log(answ);
    });
  }

  // main
  httpGetList() {
    return this.http.get<{ listApi: MainJson }>('http://localhost:8080/api/v1/data')
      .subscribe( (data) => {
        this.listApi = data;
        this.listApiObs.next(this.listApi);
      });
  }
  httpGetListObs() {
    return this.listApiObs.asObservable();
  }
  httpPostPublish(xsx) {
    this.http.post('http://localhost:8080/api/v1/publish/HAL/Resource_Pool_Management/1.0.0-master', xsx ).subscribe((answ) => {
      console.log(answ);
    });
  }
  setList(newList) {
    this.listApi = newList;
    this.listApiObs.next(this.listApi);
  }
}

