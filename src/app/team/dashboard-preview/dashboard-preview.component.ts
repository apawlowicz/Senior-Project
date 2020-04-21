import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard-preview',
  templateUrl: './dashboard-preview.component.html',
  styleUrls: ['./dashboard-preview.component.css']
})
export class DashboardPreviewComponent implements OnInit {

  constructor() { }

  public lineChartOptions2 = {
    scaleShowVerticalLines: false,
    responsive: true,
    maintainAspectRatio: false,

  };
  public lineChartLabels2 = ['2007', '2008', '2009', '2010', '2011', '2012'];
  public lineChartType2 = 'line';
  public lineChartLegend2 = true;
  public lineChartData2 = [
    {data: [59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

  public lineChartOptions1 = {
    scaleShowVerticalLines: false,
    responsive: true,
    maintainAspectRatio: false,

  };
  public lineChartLabels1 = ['2007', '2008', '2009', '2010', '2011', '2012'];
  public lineChartType1 = 'line';
  public lineChartLegend1 = true;
  public lineChartData1 = [
    {data: [59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

  public pieChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
    public pieChartData = [120, 150, 180, 90];
    public pieChartType = 'pie';

  // public lineChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  //   public lineChartData = [120, 150, 180, 90];
  //   public lineChartType = 'line';

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    maintainAspectRatio: false,

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
