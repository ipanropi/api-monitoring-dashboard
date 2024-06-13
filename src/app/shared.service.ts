// shared.service.ts
import { Injectable } from '@angular/core';


interface Document {
    documentName: string;
    uploadedDate: Date;
  }
  @Injectable({
    providedIn: 'root'
  })
  
export class SharedService {
    private documents: Document[] = [
        {documentName: "BMW API Document V.0.01", uploadedDate: new Date},

    ];

  setDocument(documentName: string, uploadedDate: Date) {
    this.documents.push({ documentName: documentName, uploadedDate: uploadedDate });
    console.log("Shared Documents",this.documents)
  }

  getDocument() {
    return this.documents;
  }
}
