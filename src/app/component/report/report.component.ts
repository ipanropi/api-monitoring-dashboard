import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgxAceEditorComponent } from "../ngx-ace-editor/ngx-ace-editor.component";
import { ApiService } from "../../service/api-service/api.service";

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
  items: any[] = [];
  submmited: boolean = false;
  tableHeaders: { name: string, key: string }[] = [];

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
      this.items = [];
      this.submmited = false; // Reset submmited to false after saving the query
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

  constructor(private apiService: ApiService) { }

  getItems() {
    const params = { queryText: this.queryText };
    this.apiService.getQuery(params).subscribe(
      (data: any[]) => {
        this.items = data;
        this.generateHeaders();
        console.log(this.items);
      },
      error => {
        console.error('Error fetching items', error);
      }
    );
  }

  generateQuery() {
    this.getItems();
    this.submmited = true; // Set submmited to true when the query is submitted
  }

  generateHeaders() {
    if (this.items.length > 0) {
      this.tableHeaders = Object.keys(this.items[0]).map(key => ({
        name: this.capitalizeFirstLetter(key),
        key: key
      }));
    }
  }

  capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  ngOnInit(): void { }
}
