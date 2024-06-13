import { Component, OnInit } from '@angular/core';
import {AppComponent} from "../../app.component";

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
    this.updateTitle()
  }

  saveChanges() {
    if (this.currentIndex !== null && this.currentData) {
      this.intervalData[this.currentIndex] = this.currentData;
      this.toggleEdit(); // close the editing view
    }
  }

  updateTitle() {
    if (this.isEditing) {
      this.appComponent.setTitle('Interval Rate');
    } else {
      this.appComponent.setTitle('Settings');
    }
  }

  constructor(private appComponent: AppComponent) { }

  ngOnInit(): void {
  }

}
