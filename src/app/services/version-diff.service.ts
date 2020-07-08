import { Injectable } from '@angular/core';
import { VersionDiff } from '../model/version-diff';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VersionDiffService {
  versionDiff: any = {
    changes: {
      newEndpoints: [
        {
          externalOperationId: '',
          pathUrl: '',
          method: '',
          summary: ''
        }
      ],
      missingEndpoints: [
        {
          externalOperationId: '',
          pathUrl: '',
          method: '',
          summary: ''
        }
      ],
      changedOperations: [
        {
          externalOperationId: '',
          pathUrl: '',
          method: '',
          summary: ''
        }
      ],
      deprecatedEndpoints: [
        {
          externalOperationId: '',
          pathUrl: '',
          method: '',
          summary: ''
        }
      ],
      diff: null,
      diffBackwardCompatible: null
    }
  };
  private versionDiffObs = new Subject<VersionDiff>();

  constructor(public http: HttpClient) { }
    get getVersionDiff() {
      return this.versionDiff;
    }
    getJsonDiff(name, version) {
      return this.http.get<{ versionDiff: VersionDiff }>('../assets/jsonData/' + name + '/' + version + '.json').subscribe( (data) => {
        this.versionDiff = data;
        this.versionDiffObs.next(this.versionDiff);
        console.log(data)
        console.log(this.versionDiff)
      });
    }
    getVersionDiffObs() {
      return this.versionDiffObs.asObservable();
    }
}
