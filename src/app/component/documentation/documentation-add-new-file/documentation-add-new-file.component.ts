import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../shared.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-documentation-add-new-file',
  templateUrl: './documentation-add-new-file.component.html',
  styleUrls: ['./documentation-add-new-file.component.css'],
  providers: [
    DatePipe
  ]
})
export class DocumentationAddNewFileComponent implements OnInit {
  documentName:any;
  selectedFile: File | undefined;
  
  constructor(
    private router: Router,
    private sharedService: SharedService,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.sharedService.setDocument(this.documentName, this.datePipe.transform(new Date(), 'dd/MM/yyyy'));
    this.router.navigate(['documentation']);
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.updateFileNameDisplay();
}

  updateFileNameDisplay() {
    const fileNameDisplay = document.getElementById('fileNameDisplay') as HTMLElement;
    if (fileNameDisplay && this.selectedFile) {
        fileNameDisplay.textContent = this.selectedFile.name;
    } else {
        if (fileNameDisplay) {
            fileNameDisplay.textContent = 'No file selected';
        }
    }
  }
}
