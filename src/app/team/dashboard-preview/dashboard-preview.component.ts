import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js'
import { Team } from 'src/app/models/team.model';


@Component({
  selector: 'app-dashboard-preview',
  templateUrl: './dashboard-preview.component.html',
  styleUrls: ['./dashboard-preview.component.css']
})
export class DashboardPreviewComponent implements OnInit {

  constructor() { }

  public Team: Team

  ngOnInit() {

    this.Team = {
      artId: 2, artName: 'Big Biz', teamId: 1, teamName: 'Sopranos', 
      teamMembers: [ 
        {userId: 1, username: 'Jeremy', roleId: 5, role: 'RTE', teamId: 1, teamName: 'Sopranos',artId: 2, artName: 'Big Biz'},
        {userId: 2, username: 'Justin', roleId: 4, role: 'STE', teamId: 1, teamName: 'Sopranos',artId: 2, artName: 'Big Biz'},
        {userId: 46, username: 'Danilo', roleId: 7, role: 'SM', teamId: 1, teamName: 'Sopranos', artId: 2, artName: 'Big Biz'},
        {userId: 45, username: 'Augustus', roleId: 6, role: 'PO', teamId: 1, teamName: 'Sopranos', artId: 2, artName: 'Big Biz'},
        {userId: 44, username: 'Kristin', roleId: 8, role: 'SU', teamId: 1, teamName: 'Sopranos', artId: 2, artName: 'Big Biz'},
        {userId: 43, username: 'Andria', roleId: 8, role: 'SU', teamId: 1, teamName: 'Sopranos', artId: 2, artName: 'Big Biz'},
        {userId: 41, username: 'Donovan',roleId: 8,  role: 'SU', teamId: 1, teamName: 'Sopranos', artId: 2, artName: 'Big Biz'},
      ],
      teamData: [
        {type: 'line', labels: ['2007', '2008', '2009', '2010', '2011', '2012'], 
          dataSet: [
            {data: [59, 80, 81, 56, 55, 40], label: 'Series A'},
            {data: [48, 40, 19, 86, 27, 90], label: 'Series B'}
          ]
        },
        {type: 'line', labels: ['2007', '2008', '2009', '2010', '2011', '2012'],
          dataSet: [
            {data: [59, 80, 81, 56, 55, 40], label: 'Series A'},
            {data: [48, 40, 19, 86, 27, 90], label: 'Series B'}
          ]
        },
        {type: 'bar', labels: ['2007', '2008', '2009', '2010', '2011', '2012'],
          dataSet: [
            {data: [59, 80, 81, 56, 55, 40], label: 'Series A'},
            {data: [48, 40, 19, 86, 27, 90], label: 'Series B'}
          ]
        },
        {type: 'pie', labels: ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'],
          dataSet: [
            {data: [120, 150, 180, 90], label: ''}
          ]
        },
      ]
    }
  }

  
}
