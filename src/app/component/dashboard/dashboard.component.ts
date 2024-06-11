import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  alertEmailList = [
    { Subject: "Create Token API - Status", Recipient: "putrashazrein@57codebox.com", DateSent: "25/03/2024" },
    { Subject: "Create Case API - Threshold", Recipient: "putrashazrein@57codebox.com", DateSent: "25/03/2024" }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
