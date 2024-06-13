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
  editDocument:any;
  documentName:any;
  selectedFile: File | undefined;
  

  constructor(
    private router: Router,
    private sharedService: SharedService,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.editDocument = this.sharedService.getEditDocument();
    if(this.editDocument !== undefined){
      this.documentName = this.editDocument[1].documentName;
      // console.log("Document Name",this.documentName)
      this.selectedFile = this.editDocument[1].file;
    }
  }

  onSubmit(){
    if(this.editDocument == undefined){
      this.sharedService.setDocument(this.documentName, this.datePipe.transform(new Date(), 'dd/MM/yyyy'), this.selectedFile as File);
    }else{
      this.sharedService.setEditDocument(this.documentName, this.datePipe.transform(new Date(), 'dd/MM/yyyy'), this.selectedFile as File, this.editDocument[0].editIndex);
    }
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
