// Email Configuration Component TypeScript
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Email {
  email: string;
  lastUpdated: string;
}

@Component({
  selector: 'app-email-configuration',
  templateUrl: './email-configuration.component.html',
  styleUrls: ['./email-configuration.component.css']
})
export class EmailConfigurationComponent implements OnInit {
  emailForm: FormGroup;
  isEditing = false;
  isAdding = false;
  showModalDelete = false;
  currentEditIndex: number | null = null;
  emails: Email[] = [
    {email: 'putrashazrein@57codebox.com', lastUpdated: '25/03/2024'},
    {email: 'johndoe@57codebox.com', lastUpdated: '25/03/2024'},
    {email: 'ahmad@57codebox.com', lastUpdated: '25/03/2024'},
    {email: 'siti@57codebox.com', lastUpdated: '25/03/2024'},
  ]

  constructor(private fb: FormBuilder) {
    this.emailForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {}

  toggleAdd() {
    this.isAdding = !this.isAdding;
    this.emailForm.reset();
  }

  toggleEdit() {
    this.isEditing = !this.isEditing;
    this.currentEditIndex = null;
    this.emailForm.reset();
  }

  startEdit(index: number) {
    this.isEditing = true;
    this.currentEditIndex = index;
    this.emailForm.patchValue({
      email: this.emails[index].email
    });
  }

  startDelete(index: number) {
    this.showModalDelete = true;
    this.currentEditIndex = index;
  }

  closeModal() {
    this.showModalDelete = false;
  }

  confirmDelete() {
    if (this.currentEditIndex !== null) {
      this.emails.splice(this.currentEditIndex, 1);
    }
    this.closeModal();
  }

  onSubmit() {
    if (this.emailForm.valid) {
      const emailData = this.emailForm.value;
      const currentDate = new Date().toLocaleDateString();

      if (this.isAdding) {
        this.emails.push({ ...emailData, lastUpdated: currentDate });
        this.toggleAdd();
      } else if (this.isEditing && this.currentEditIndex !== null) {
        this.emails[this.currentEditIndex] = { ...emailData, lastUpdated: currentDate };
        this.toggleEdit();
      }
    } else {
      console.log('Form is invalid');
    }
  }
}
