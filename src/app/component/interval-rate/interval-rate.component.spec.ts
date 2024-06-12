import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervalRateComponent } from './interval-rate.component';

describe('IntervalRateComponent', () => {
  let component: IntervalRateComponent;
  let fixture: ComponentFixture<IntervalRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntervalRateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntervalRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
