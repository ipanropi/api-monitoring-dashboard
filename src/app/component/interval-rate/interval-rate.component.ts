import { Component, OnInit } from '@angular/core';

interface IntervalData {
  tools: string;
  interval: string;
  lastUpdated: string;
}

@Component({
  selector: 'app-interval-rate',
  templateUrl: './interval-rate.component.html',
  styleUrls: ['./interval-rate.component.css']
})
export class IntervalRateComponent implements OnInit {

  currentData: IntervalData | null = null;
  currentIndex: number | null = null;
  isEditing: boolean = false;
  isAdding: boolean = false;
  intervalData: IntervalData[] = [
    {tools: "Service Status & Response Time", interval: "Cron Expression", lastUpdated: "25/03/2024"},
    {tools: "HTTPS Status Code", interval: "Cron Expression", lastUpdated: "25/03/2024"},
    {tools: "Daily API Usage", interval: "Cron Expression", lastUpdated: "25/03/2024"},
    {tools: "Error Rate", interval: "Cron Expression", lastUpdated: "25/03/2024"}
  ];

  toggleEdit(data: IntervalData | null = null, index: number | null = null) {
    this.isEditing = !this.isEditing;
    this.currentData = data ? { ...data } : null; // create a copy of the data to edit
    this.currentIndex = index;
  }

  saveChanges() {
    if (this.currentIndex !== null && this.currentData) {
      this.intervalData[this.currentIndex] = this.currentData;
      this.toggleEdit(); // close the editing view
    }
  }

  toggleAdd() {
    this.isAdding = !this.isAdding;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
