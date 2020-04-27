import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js'


@Component({
  selector: 'app-dashboard-preview',
  templateUrl: './dashboard-preview.component.html',
  styleUrls: ['./dashboard-preview.component.css']
})
export class DashboardPreviewComponent implements OnInit {

  constructor() { }

  // public height = "250"
  // public width = "250"

  teammembers = {
    teamId: 8,
    teamName: 'Sprintellectuals',
    member: [ 
      {userid: 47, username: 'Speedy McSpeederson', role: 'SM', teamName: 'Sprintellectuals', artName: 'Test Train'},
      {userid: 48, username: 'Smartha Knowlegeberry', role: 'PO', teamName: 'Sprintellectuals', artName: 'Test Train'},
      {userid: 49, username: 'Rick Grimes', role: 'TL', teamName: 'Sprintellectuals', artName: 'Test Train'},
      {userid: 50, username: 'Carl Grimes', role: 'TM', teamName: 'Sprintellectuals', artName: 'Test Train'},
      {userid: 51, username: 'Daryl Dixon', role: 'TM', teamName: 'Sprintellectuals', artName: 'Test Train'},
      {userid: 52, username: 'Glenn Rhee', role: 'TM', teamName: 'Sprintellectuals', artName: 'Test Train'},
    ]
  }

  public TeamLabels1 = ['2007', '2008', '2009', '2010', '2011', '2012'];
  public TeamData1 = [
    {data: [59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];
  public TeamChart1 = "line";

  public TeamLabels2 = ['2007', '2008', '2009', '2010', '2011', '2012'];
  public TeamData2 = [
    {data: [59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];
  public TeamChart2 = "line";

  public TeamLabels3 = ['2007', '2008', '2009', '2010', '2011', '2012'];
  public TeamData3 = [
    {data: [59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];
  public TeamChart3 = 'bar';

  public TeamLabels4 = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  public TeamData4 = [120, 150, 180, 90];
  public TeamChart4 = 'pie';

  ngOnInit() {
  }
}
