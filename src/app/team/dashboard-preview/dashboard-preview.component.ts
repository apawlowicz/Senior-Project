import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js'


@Component({
  selector: 'app-dashboard-preview',
  templateUrl: './dashboard-preview.component.html',
  styleUrls: ['./dashboard-preview.component.css']
})
export class DashboardPreviewComponent implements OnInit {

  constructor() { }

  teammembers = {
    teamId: 1,
    teamName: 'Sopranos',
    member: [ 
      {userid: 46, username: 'Danilo', roleid: 7, role: 'SM', teamid: 1, teamName: 'Sopranos', artid: 2, artName: 'Big Biz'},
      {userid: 45, username: 'Augustus', roleid: 6, role: 'PO', teamid: 1, teamName: 'Sopranos', artid: 2, artName: 'Big Biz'},
      {userid: 44, username: 'Kristin', roleid: 8, role: 'SU', teamid: 1, teamName: 'Sopranos', artid: 2, artName: 'Big Biz'},
      {userid: 43, username: 'Andria', roleid: 8, role: 'SU', teamid: 1, teamName: 'Sopranos', artid: 2, artName: 'Big Biz'},
      {userid: 42, username: 'Fannie', roleid: 8, role: 'SU', teamid: 1, teamName: 'Sopranos', artid: 2, artName: 'Big Biz'},
      {userid: 41, username: 'Donovan',roleid: 8,  role: 'SU', teamid: 1, teamName: 'Sopranos', artid: 2, artName: 'Big Biz'},
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
