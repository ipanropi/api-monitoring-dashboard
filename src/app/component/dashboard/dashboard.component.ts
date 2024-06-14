import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[
    DatePipe
  ]
})
export class DashboardComponent implements OnInit {
  LastUpdate: any = "25/03/2024 11:30am";

  last7DaysDates: string[] = [];

  alertEmailList = [
    { Subject: "Create Token API - Status", Recipient: "putrashazrein@57codebox.com", DateSent: "25/03/2024" },
    { Subject: "Create Case API - Threshold", Recipient: "putrashazrein@57codebox.com", DateSent: "25/03/2024" }
  ];

  categories = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'];

  data = [
    {
      name: "Create/Update Case",
      data: [70, 50, 60, 30, 40, 90, 80]
    },
    {
      name: "Get Case Assistance",
      data: [10, 50, 60, 40, 80, 30, 20]
    },
    {
      name: "Create Token",
      data: [90, 40, 50, 30, 60, 80, 70]
    },
    {
      name: "Check Health",
      data: [100, 50, 120, 110, 140, 300, 80]
    },
    {
      name: "Get Tracking",
      data: [70, 80, 90, 40, 50, 30, 40]
    },
  ];

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {}; // Initialize with an empty object

  constructor(
    private datepipe: DatePipe,
  ) { }

  ngOnInit(): void {
    this.last7DaysDates = this.getLast7DaysDates();
    this.initializeChartOptions();
    console.log("Last 7 Day Dates =>", this.last7DaysDates);
  }

  getLast7DaysDates(): string[] {
    const dates: string[] = [];
    const today = new Date();

    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(today.getDate() - i);
      dates.push(<string>this.datepipe.transform(date, "dd/MM/yyyy"));
    }

    return dates;
  }

  initializeChartOptions(): void {
    this.chartOptions = {
      credits: {
        enabled: false,
      },
      colors: ['#6591BA', '#BA6565', '#66BA65', '#BAB665', '#9465BA'],
      legend: {
        symbolRadius: 0,
        layout: 'horizontal',
        align: 'center',
        verticalAlign: 'bottom',
        itemStyle: {
          fontSize: '10px' // Adjust font size of the legend items
        },
      },
      chart: {
        type: 'column', // Define type at chart level
        width: null,
        height: null,
      },
      title: {
        text: ''
      },
      xAxis: {
        categories: this.last7DaysDates // Define your x-axis categories
      },
      yAxis: {
        min: 0,
        reversedStacks: false,
        title: {
          text: 'Usage Count'
        }
      },
      plotOptions: {
        column: {
          borderWidth: 0,
          pointWidth: 20,
          stacking: 'normal',
        }
      },
      series: this.data as Highcharts.SeriesOptionsType[], // Manually declare the series without casting
      responsive: {
        rules: [{
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            plotOptions: {
              column: {
                pointWidth: 10 // Smaller point width for small screens
              }
            }
          }
        }, {
          condition: {
            minWidth: 501,
            maxWidth: 800
          },
          chartOptions: {
            plotOptions: {
              column: {
                pointWidth: 30 // Medium point width for medium screens
              }
            }
          }
        }, {
          condition: {
            minWidth: 801
          },
          chartOptions: {
            plotOptions: {
              column: {
                pointWidth: 50 // Default point width for large screens
              }
            }
          }
        }]
      }
    };
  }
}
