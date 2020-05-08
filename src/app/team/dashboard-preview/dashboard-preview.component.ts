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
        {
          type: 'line', labels: ['2019.2', '2019.3', '2019.4', '2020.1'],
          dataSet: [
            { data: [1, 1, 1.5, 2], label: 'Productivity', fill: false },
            { data: [2, 2, 1.5, 1.5], label: 'Predictability', fill: false },
            { data: [2, 1.5, 1, 2], label: 'Quality', fill: false },
            { data: [1, 2, 2, 1], label: 'Engagement', fill: false }
          ]
        },
        {
          type: 'line', labels: ['2019.2', '2019.3', '2019.4', '2020.1'],
          dataSet: [
            { data: [1, 1, 2, 2], label: 'Backlog Health', fill: false },
            { data: [1, 1, 1, 2], label: 'Distributed Decision Making', fill: false }
          ],
        },
        {
          type: 'line', labels: ['2019.2', '2019.3', '2019.4', '2020.1'],
          dataSet: [
            { data: [2, 2, 2, 1], label: 'Defintion of Ready', fill: false },
            { data: [2, 2, 1, 2], label: 'Definition of Done', fill: false }
          ]
        },
        {
          type: 'line', labels: ['2019.2', '2019.3', '2019.4', '2020.1'],
          dataSet: [
            { data: [2, 2, 1, 2], label: 'Automated CI/CD', fill: false },
            { data: [2, 1, 1, 2], label: 'Automated Unit Testing', fill: false }
          ]
        },
      ]
    }
  }

  
}
