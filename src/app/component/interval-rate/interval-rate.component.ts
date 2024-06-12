import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interval-rate',
  templateUrl: './interval-rate.component.html',
  styleUrls: ['./interval-rate.component.css']
})
export class IntervalRateComponent implements OnInit {
  isEditing: boolean = false;
  isAdding: boolean = false;

  toggleEdit() {
    this.isEditing = !this.isEditing;
  }

  toggleAdd() {
    this.isAdding = !this.isAdding;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
