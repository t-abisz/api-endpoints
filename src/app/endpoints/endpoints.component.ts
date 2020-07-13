import { Component, OnInit } from '@angular/core';
import {MainService} from '../services/main.service';


@Component({
  selector: 'app-endpoints',
  templateUrl: './endpoints.component.html',
  styleUrls: ['./endpoints.component.css']
})
export class EndpointsComponent implements OnInit {

  constructor(public mainService: MainService) { }

  ngOnInit(): void {
  }
}
