import { Component, OnInit } from '@angular/core';
import {ImplementationService} from '../../services/implementation.service';
import {Implementation} from '../../model/implementation';

@Component({
  selector: 'app-implementation',
  templateUrl: './implementation.component.html',
  styleUrls: ['./implementation.component.css']
})
export class ImplementationComponent implements OnInit {
  public impl: Implementation = {
    data: [
      {
        path: '',
        method: '',
        uid: null,
        externalOperationId: '',
        referenceOperationVersion: '',
        implementations: [
          {
            systemModule: '',
            systemName: '',
            deploymentStatusOfOperationDTO: {}
          }
        ]
      }
    ]
};
  public apiKeys;
  constructor(private implementation: ImplementationService) { }

  ngOnInit(): void {
    this.implementation.getimplementation();
    this.implementation.getimplementationObs().subscribe(data => {
      this.impl = data;
      console.log(this.impl.data[0].implementations[0].deploymentStatusOfOperationDTO)
      this.apiKeys = this.impl.data[0].implementations[0].deploymentStatusOfOperationDTO;
    });
  }

}
