import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent implements OnInit {
  documentList=[
    {FileName: "BMW API Document V.0.01", LastUploaded: "25/03/2024"}

  ];
  isDeleting: boolean = false;
  showModal: boolean = false; // State for modal visibility
  constructor(private router: Router) {}

  ngOnInit(): void {
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
