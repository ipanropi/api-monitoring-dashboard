import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-configuration',
  templateUrl: './email-configuration.component.html',
  styleUrls: ['./email-configuration.component.css']
})
export class EmailConfigurationComponent implements OnInit {
  isEditing: boolean = false;
  isAdding: boolean = false;
  isDeleting: boolean = false;
  showModal: boolean = false; // State for modal visibility

  constructor() { }

  toggleEdit() {
    this.isEditing = !this.isEditing;
  }

  toggleAdd() {
    this.isAdding = !this.isAdding;
  }

  toggleDelete() {
    this.isDeleting = !this.isDeleting;
    this.showModal = true; // Show modal when delete is toggled
  }

  closeModal() {
    this.showModal = false; // Hide modal
  }

  ngOnInit(): void { }
}
