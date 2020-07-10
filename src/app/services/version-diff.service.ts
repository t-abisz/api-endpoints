import { Injectable } from '@angular/core';
import { VersionDiff } from '../model/version-diff';
import {Endpoint} from '../model/endpoint';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VersionDiffService {
  versionDiff: any;
  private versionDiffObs = new Subject<VersionDiff>();

  constructor(public http: HttpClient) { }
    get getVersionDiff() {
      return this.versionDiff;
    }
    getJsonDiff(name, version) {
      return this.http.get<{ versionDiff: VersionDiff }>('http://localhost:8080/api/v1/publish/HAL/'+name+'/'+version)
        .subscribe( (data) => {
        this.versionDiff = data[0];
        this.versionDiffObs.next(this.versionDiff);
      });
    }
    getVersionDiffObs() {
      return this.versionDiffObs.asObservable();
    }
}
