// shared.service.ts
import { Injectable } from '@angular/core';


interface Document {
    documentName: string;
    uploadedDate: any;
    file: File
  }
  @Injectable({
    providedIn: 'root'
  })
  
export class SharedService {
    private documents: Document[] = [

    ];

  setDocument(documentName: string, uploadedDate: any, file:File) {
    this.documents.push({ documentName: documentName, uploadedDate: uploadedDate, file: file });
    console.log("Shared Documents",this.documents)
  }

  getDocument() {
    return this.documents;
  }

  editDocumentRequest(index:number){

  }

  deleteDocumentrequest(index:number){
    this.documents.splice(index, 1);
  }
}
