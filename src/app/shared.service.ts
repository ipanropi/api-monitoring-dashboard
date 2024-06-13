// shared.service.ts
import { Injectable } from '@angular/core';
import { edit } from 'ace-builds';


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
    private editIndex:any;


  setDocument(documentName: string, uploadedDate: any, file:File) {
    this.documents.push({ documentName: documentName, uploadedDate: uploadedDate, file: file });
    // console.log("Shared Documents",this.documents)
  }

  getDocument() {
    return this.documents;
  }

  getEditDocument(){
    if(this.editIndex !== undefined){
      const documentCopy = [{editIndex: this.editIndex},this.documents[this.editIndex]];
      // console.log("DocumentCopy", documentCopy);
      this.editIndex = undefined;
      return documentCopy;
    }
    return;
  }

  setEditDocument(documentName: string, uploadedDate: any, file:File, index:number){
    if (index >= 0 && index <= this.documents.length) {
      this.documents.splice(index, 1, { documentName: documentName, uploadedDate: uploadedDate, file: file });
    } else {
      console.error('Index out of range');
    }
  }

  editDocumentRequest(index:number){
    this.editIndex = index;
  }

  deleteDocumentrequest(index:number){
    this.documents.splice(index, 1);
  }
}
