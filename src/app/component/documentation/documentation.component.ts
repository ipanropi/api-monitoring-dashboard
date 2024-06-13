import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../shared.service';


interface Document {
  documentName: string;
  uploadedDate: Date;
}
@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent implements OnInit {
  documentList:Document[]=[];
  isDeleting: boolean = false;
  showModal: boolean = false; // State for modal visibility
  constructor(
    private router: Router,
    private sharedservice:SharedService
  ) {}

  ngOnInit(): void {
    this.documentList=this.sharedservice.getDocument();
  }
  goaddnew() {
    this.router.navigate(['documentation/newfile']);
  }

  onDelete(){
    this.isDeleting = !this.isDeleting;
    this.showModal = true; // Show modal when delete is toggled
  }
  toggleDelete() {

  }

  closeModal() {
    this.showModal = false; // Hide modal
  }
}
