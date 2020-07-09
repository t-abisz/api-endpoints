import {Component, OnDestroy, OnInit} from '@angular/core';
import {VersionDiff} from '../../model/version-diff';
import {VersionDiffService} from '../../services/version-diff.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit, OnDestroy {
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
  subscription: Subscription;
  ngOnInit(): void {
   this.subscription = this.diffVersion.getVersionDiffObs().subscribe((diff) => {
      this.diff = diff;
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
