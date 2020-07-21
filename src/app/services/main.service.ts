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
  private menuHandler = false;
  private menuHandlerObs = new Subject<boolean>();

  private listApi: any;
  private listApiObs = new Subject<MainJson>();

  private codeEditor: string;
  private codeEditorObs = new Subject<any>();

  constructor(private http: HttpClient) { }
  // code obs
  getEditor() {
    return this.codeEditorObs.asObservable();
  }
  setEditorHandler(change) {
    this.codeEditor = change;
    this.codeEditorObs.next(this.codeEditor);
  }
  httpGetEditor() {
    return this.http.get<string>('http://localhost:8080/api/v1/project')
      .subscribe( (data) => {
        this.codeEditor = data;
        this.codeEditorObs.next(this.codeEditor);
      });
  }
 // menu services
  getMenuHandler() {
    return this.menuHandlerObs.asObservable();
  }
  setMenuHandler(change) {
    this.menuHandler = change;
    this.menuHandlerObs.next(this.menuHandler);
  }
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
  httpPostPublish(group, api, version) {
    this.http.post('http://localhost:8080/api/v1/publish/' + group + '/' + api + '/' + version, {}).subscribe((answ) => {
      console.log(answ);
    });
  }
  httpGetCode() {
    return this.http.get<{ listApi: MainJson }>('../../assets/jsonData/impl.json')
      .subscribe( (data) => {
        console.log(data);
      });
  }
  setList(newList) {
    this.listApi = newList;
    this.listApiObs.next(this.listApi);
  }
}

