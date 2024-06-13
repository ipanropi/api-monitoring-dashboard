import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../shared.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-documentation-add-new-file',
  templateUrl: './documentation-add-new-file.component.html',
  styleUrls: ['./documentation-add-new-file.component.css']
})
export class DocumentationAddNewFileComponent implements OnInit {
  documentName:any;

  constructor(
    private router: Router,
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.sharedService.setDocument(this.documentName, new Date());
    this.router.navigate(['documentation']);
  }

}
