import {Component, Inject, OnInit} from '@angular/core';
import {MainService} from '../../services/main.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  codeJson = '';

  editorOptions = {theme: 'vs', language: 'json'};

  constructor(public mainService: MainService, @Inject(MAT_DIALOG_DATA) public data: any) { }
  ngOnInit(): void {
    this.mainService.httpGetEditor();
    this.mainService.getEditor().subscribe(data => {
      const csr = JSON.stringify(data, undefined, 4);
      this.codeJson = csr;

    });
  }
  test(code) {
    console.log(code);
  }
  edit() {
    this.mainService.httpGetEditor();
    this.mainService.getEditor().subscribe(data => {
      const csr = JSON.stringify(data, undefined, 4);
      this.codeJson = csr;

    });
  }
}