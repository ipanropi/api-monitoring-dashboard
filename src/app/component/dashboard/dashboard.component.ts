import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

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

  categories = ['Day 1', 'Day 2', 'Day 3','Day 4', 'Day 5', 'Day 6', 'Day 7'];

  data = [
    {
      name: "Create/Update Case",
      data: [70,50,60,30,40,90,80]
    },
    {
      name: "Get Case Assistance",
      data: [10,50,60,40,80,30,20]
    },
    {
      name: "Create Token",
      data: [90,40,50,30,60,80,70]
    },
    {
      name: "Check Health",
      data: [100,50,120,110,140,300,80]
    },
    {
      name: "Get Tracking",
      data: [70,80,90,40,50,30,40]
    },
  ];

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    credits:{
      enabled: false,
    },
    colors: ['#6591BA','#BA6565','#66BA65','#BAB665','#9465BA'],
    legend:{
        symbolRadius: 0,
        layout: 'horizontal',
        align: 'center',
        verticalAlign: 'bottom',
        itemStyle: {
          fontSize: '10px' // Adjust font size of the legend items
        },
    },
    chart: {
      type: 'column' // Define type at chart level
    },
    title: {
      text: ''
    },
    xAxis: {
      categories: this.categories // Define your x-axis categories
    },
    yAxis: {
      min: 0,
      reversedStacks: false,
      title: {
        text: 'Usage Count'
      }
    },
    plotOptions:{
      column:{
        borderWidth: 0,
        pointWidth: 50,
        stacking: 'normal',
      }
    },
    series: this.data as Highcharts.SeriesOptionsType[] // Manually declare the series without casting
  };
  constructor() { }

  ngOnInit(): void {
  }

}
