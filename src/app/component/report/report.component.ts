import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  isDeleting: boolean = false;
  showModal: boolean = false;
  queryText: string = '';
  queryName: string = '';
  handleTextChange(newText: string) {
    console.log('Editor content:', newText);
    // You can handle the new text here, for example, save it to a variable or process it further
    this.queryText = newText;
  }

  saveQuery() {
    console.log(this.queryText);
    console.log(this.queryName);

  }

  querySaved: any[] = [
    {queryName: "Customer Report", queryText: "select * from table1"},
    {queryName: "BMW Report", queryText: "select * from table2"},
    {queryName: "AIG Report", queryText: "select * from table3"},
    {queryName: "Myvi Report", queryText: "select * from table3"},
    {queryName: "Honda Report", queryText: "select * from table3"},
  ];

  toggleDelete() {
    this.isDeleting = !this.isDeleting;
    this.showModal = true; // Show modal when delete is toggled
  }

  closeModal() {
    this.showModal = false; // Hide modal
  }



  constructor() { }

  ngOnInit(): void {
  }

}
