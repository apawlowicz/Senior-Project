import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {

  constructor() { }
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    maintainAspectRatio: false,

    layout: {
      padding: {
        top: 100
      }
    }

  };
  public barChartLabels = ['2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];
  ngOnInit() {
  }
}
