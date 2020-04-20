import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];

  public barChartData2: ChartDataSets[] = [
    { data: [5, 9, 0, 1, 6, 5, 4], label: 'Series A' },
    { data: [2, 8, 4, 9, 8, 2, 9], label: 'Series B' }
  ];

  public barChartColors: Color[] = [
    { backgroundColor: 'purple' },
    { backgroundColor: 'brown' },
  ]

  colors = ['red', 'green', 'blue', 'yellow', 'purple', 'teal'];
  colorIndex = 0;

  constructor() { }

  ngOnInit() {
    //setInterval(() => this.randomize(), 1000);
  }

  randomize() {
    this.barChartColors[0].backgroundColor = this.colors[this.colorIndex++];
    if (this.colorIndex >= this.colors.length) {
      this.colorIndex = 0;
    }
    this.barChartColors = [ ...this.barChartColors ];
    this.barChartData = this.barChartData2
  }
}
