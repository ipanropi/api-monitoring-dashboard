import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  currentDeleteIndex: number = 0;
  currentExportIndex: number = 0;
  isDeleting: boolean = false;
  isExporting: boolean = false;
  showModalDelete: boolean = false;
  showModalExport: boolean = false;
  queryText: string = '';
  queryName: string = '';
  querySaved: any[] = [
    {queryName: "Customer Report", queryText: "select * from table1"},
    {queryName: "BMW Report", queryText: "select * from table2"},
    {queryName: "AIG Report", queryText: "select * from table3"},
    {queryName: "Myvi Report", queryText: "select * from table3"},
    {queryName: "Honda Report", queryText: "select * from table3"},
  ];

  handleTextChange(newText: string) {
    console.log('Editor content:', newText);
    this.queryText = newText;
  }

  saveQuery() {
    if (this.queryName && this.queryText) {
      this.querySaved.push({queryName: this.queryName, queryText: this.queryText});
      this.queryName = '';
      this.queryText = '';
    }
  }

  toggleDelete(index: number) {
    this.isDeleting = !this.isDeleting;
    this.showModalDelete = true
    this.currentDeleteIndex = index;
  }

  confirmDelete(){
    this.querySaved.splice(this.currentDeleteIndex, 1);
    this.closeModalDelete();
  }

  toggleExport(index: number){
    this.isExporting = !this.isExporting;
    this.showModalExport = !this.showModalExport;
    this.currentExportIndex = index;
  }

  confirmExport(){
    this.closeModalExport();
  }

  closeModalDelete() {
    this.showModalDelete = false;
  }

  closeModalExport(){
    this.showModalExport = false;
  }

  constructor() { }

  ngOnInit(): void { }
}
