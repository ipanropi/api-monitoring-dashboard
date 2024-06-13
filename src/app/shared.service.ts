// shared.service.ts
import { Injectable } from '@angular/core';


interface Document {
    documentName: string;
    uploadedDate: any;
  }
  @Injectable({
    providedIn: 'root'
  })
  
export class SharedService {
    private documents: Document[] = [
        {documentName: "BMW API Document V.0.01", uploadedDate: "23/05/2024"},

    ];

  setDocument(documentName: string, uploadedDate: any) {
    this.documents.push({ documentName: documentName, uploadedDate: uploadedDate });
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
