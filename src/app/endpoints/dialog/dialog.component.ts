import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {VersionDiff} from '../../model/version-diff';
import {VersionDiffService} from '../../services/version-diff.service';
import {Subscription} from 'rxjs';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit, OnDestroy {
  public diff: VersionDiff = {
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
  };
  constructor(public diffVersion: VersionDiffService,  @Inject(MAT_DIALOG_DATA) public data: any ) { }
  subscription: Subscription;
  ngOnInit(): void {
    this.diffVersion.getJsonDiff(this.data.appName, this.data.appVersion);
    this.subscription = this.diffVersion.getVersionDiffObs().subscribe((diff) => {
      this.diff = diff;
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
