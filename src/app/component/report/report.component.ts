import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {NgxAceEditorComponent} from "../ngx-ace-editor/ngx-ace-editor.component";

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit, AfterViewInit {
  @ViewChild('editor') editor: NgxAceEditorComponent | undefined;
  currentDeleteIndex: number = 0;
  currentExportIndex: number = 0;
  isDeleting: boolean = false;
  isExporting: boolean = false;
  showModalDelete: boolean = false;
  showModalExport: boolean = false;
  queryText: string = '';
  queryName: string = '';
  querySaved: any[] = [
    { queryName: "Customer Report", queryText: "select * from table1" },
    { queryName: "BMW Report", queryText: "select * from table2" },
    { queryName: "AIG Report", queryText: "select * from table3" },
    { queryName: "Myvi Report", queryText: "select * from table3" },
    { queryName: "Honda Report", queryText: "select * from table3" },
  ];

  handleTextChange(newText: string) {
    console.log('Editor content:', newText);
    this.queryText = newText;
  }

  saveQuery() {
    if (this.queryName && this.queryText) {
      this.querySaved.push({ queryName: this.queryName, queryText: this.queryText });
      this.queryName = '';
      this.queryText = '';
      this.clearEditor();
    }
  }

  clearEditor() {
    if (this.editor) {
      this.editor.setValue('');
      console.log('Editor cleared');
    } else {
      console.log('Editor instance not found');
    }
  }

  toggleDelete(index: number) {
    this.isDeleting = !this.isDeleting;
    this.showModalDelete = true;
    this.currentDeleteIndex = index;
  }

  confirmDelete() {
    this.querySaved.splice(this.currentDeleteIndex, 1);
    this.closeModalDelete();
  }

  toggleExport(index: number) {
    this.isExporting = !this.isExporting;
    this.showModalExport = !this.showModalExport;
    this.currentExportIndex = index;
  }

  confirmExport() {
    this.closeModalExport();
  }

  closeModalDelete() {
    this.showModalDelete = false;
  }

  closeModalExport() {
    this.showModalExport = false;
  }

  ngAfterViewInit() {
    console.log('Editor instance:', this.editor);
  }

  constructor() { }

  ngOnInit(): void { }
}
