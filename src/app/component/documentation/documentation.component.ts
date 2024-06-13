import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../shared.service';


interface Document {
  documentName: string;
  uploadedDate: any;
}
@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css'],
})
export class DocumentationComponent implements OnInit {
  documentList:Document[]=[];
  selectedIndex: number = -1;
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

  onDelete(index: number){
    this.isDeleting = !this.isDeleting;
    this.showModal = true; // Show modal when delete is toggled
    this.selectedIndex=index;
  }

  deleteRequest(){
    this.sharedservice.deleteDocumentrequest(this.selectedIndex)
    this.closeModal();
  }

  toggleDelete() {

  }

  closeModal() {
    this.showModal = false; // Hide modal
  }

  editDocument(index: number){
    this.sharedservice.editDocumentRequest(index);
  }
}
