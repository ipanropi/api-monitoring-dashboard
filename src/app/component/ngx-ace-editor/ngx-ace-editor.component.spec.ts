import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAceEditorComponent } from './ngx-ace-editor.component';

describe('NgxAceEditorComponent', () => {
  let component: NgxAceEditorComponent;
  let fixture: ComponentFixture<NgxAceEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxAceEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxAceEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
