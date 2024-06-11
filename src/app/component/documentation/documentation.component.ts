import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent implements OnInit {
  documentList=[
    {FileName: "BMW API Document V.0.01", LastUploaded: "25/03/2024"}

  ];


  constructor() { }

  ngOnInit(): void {
  }

}
