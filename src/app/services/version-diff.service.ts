import { Injectable } from '@angular/core';
import { VersionDiff } from '../model/version-diff';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VersionDiffService {
  private versionDiff: any;
  private versionDiffObs = new Subject<VersionDiff>();
  private urlToApi = '../assets/jsonData/';

  constructor(public http: HttpClient) { }
  get url() {
    return this.urlToApi;
  }
    getJsonDiff(name, version) {
      return this.http.get<{ versionDiff: VersionDiff }>('http://localhost:8080/api/v1/publish/HAL/' + name + '/' + version)
        .subscribe( (data) => {
        this.versionDiff = data[0];
        this.versionDiffObs.next(this.versionDiff);
      });
    }
    getVersionDiffObs() {
      return this.versionDiffObs.asObservable();
    }
}
