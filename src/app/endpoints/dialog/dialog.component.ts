import { Component, OnInit } from '@angular/core';
import {VersionDiff} from '../../model/version-diff';
import {Endpoint} from '../../model/endpoint';
import {VersionDiffService} from '../../services/version-diff.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  public diff: VersionDiff = {
    changes: {
      newEndpoints: [{
        externalOperationId: '',
        pathUrl: '',
        method: '',
        summary: ''
      }],
      missingEndpoints: [{
        externalOperationId: '',
        pathUrl: '',
        method: '',
        summary: ''
      }],
      changedOperations: [{
        externalOperationId: '',
        pathUrl: '',
        method: '',
        summary: ''
      }],
      deprecatedEndpoints: [{
        externalOperationId: '',
        pathUrl: '',
        method: '',
        summary: ''
      }],
      diff: null,
      diffBackwardCompatible: null
    }
  };
  constructor(public diffVersion: VersionDiffService ) { }

  ngOnInit(): void {
    this.diffVersion.getVersionDiffObs().subscribe((diff) => {
      this.diff = diff;
      console.log(this.diff);
    });
  }
  // todo unsubscribe on destroy

}
