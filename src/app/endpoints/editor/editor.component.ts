import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {MainService} from '../../services/main.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit, OnDestroy {
  codeJson = '';
  editorOptions = {theme: 'vs', language: this.data.codeLang};

  constructor(public mainService: MainService, @Inject(MAT_DIALOG_DATA) public data: any) { }
  subscription: Subscription;
  ngOnInit(): void {
    this.mainService.httpGetEditor(this.data.uid);
    this.subscription = this.mainService.getEditor().subscribe(data => {
      this.codeJson = JSON.parse(data).content;
    });
  }
  saveCode(code) {
    this.mainService.httpPostCode(code).subscribe((answ) => {
      console.log(answ);
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
