import { Component, ViewChild, ElementRef, Input, Output, EventEmitter, OnInit, AfterViewInit } from '@angular/core';
import * as ace from 'ace-builds';

@Component({
  selector: 'app-ngx-ace-editor',
  templateUrl: './ngx-ace-editor.component.html',
  styleUrls: ['./ngx-ace-editor.component.css']
})
export class NgxAceEditorComponent implements OnInit, AfterViewInit {
  @ViewChild('codeEditor', { static: false }) codeEditorElmRef!: ElementRef;

  @Input() theme: string = 'chrome'; // Light theme
  @Input() lang: string = 'sql';
  @Output() textChange = new EventEmitter<string>();

  private codeEditor!: ace.Ace.Editor;

  ngOnInit() {
    ace.config.set('basePath', 'https://unpkg.com/ace-builds@1.4.12/src-noconflict');
  }

  ngAfterViewInit() {
    this.initializeEditor();
  }

  private initializeEditor() {
    this.codeEditor = ace.edit(this.codeEditorElmRef.nativeElement);
    this.codeEditor.setTheme(`ace/theme/${this.theme}`);
    this.codeEditor.session.setMode(`ace/mode/${this.lang}`);

    // Enable autocomplete
    ace.require('ace/ext/language_tools');
    this.codeEditor.setOptions({
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true,
      enableSnippets: true
    });

    this.codeEditor.on('change', () => {
      this.textChange.emit(this.codeEditor.getValue());
    });
  }

  public setValue(value: string) {
    if (this.codeEditor) {
      this.codeEditor.setValue(value, -1);  // -1 to move cursor to the start
    }
  }
}
