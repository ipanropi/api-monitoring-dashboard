import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentationAddNewFileComponent } from './documentation-add-new-file.component';

describe('DocumentationAddNewFileComponent', () => {
  let component: DocumentationAddNewFileComponent;
  let fixture: ComponentFixture<DocumentationAddNewFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentationAddNewFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentationAddNewFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
