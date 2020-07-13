import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {Implementation} from '../model/implementation';

@Injectable({
  providedIn: 'root'
})
export class ImplementationService {
  private implementation: any;
  private implementationObs = new Subject<Implementation>();
  private urlToApi = '../assets/jsonData/';

  constructor(private http: HttpClient) { }

  get url() {
    return this.urlToApi;
  }

  getimplementation(uid) {
    return this.http.get<{ implementation: Implementation }>('http://localhost:8080/api/v1/implementation/' + uid)
      .subscribe( (data) => {
        this.implementation = data;
        this.implementationObs.next(this.implementation);
        console.log(this.implementation)
      });
  }
  getimplementationObs() {
    return this.implementationObs.asObservable();
  }
}
