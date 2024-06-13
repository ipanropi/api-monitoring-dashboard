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
    this.updateFileNameDisplay();
  }

  onSubmit(){
    this.sharedService.setDocument(this.documentName, this.datePipe.transform(new Date(), 'dd/MM/yyyy'), this.selectedFile as File);
    this.router.navigate(['documentation']);
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.updateFileNameDisplay();
}

  updateFileNameDisplay() {
    this.documentName = document.getElementById('fileNameDisplay') as HTMLElement;
    if (this.documentName && this.selectedFile) {
      this.documentName = this.selectedFile.name;
    } else {
        if (this.documentName) {
          this.documentName = '';
        }
    }
  }
}
