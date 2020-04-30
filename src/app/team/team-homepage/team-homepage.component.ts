import { Component, OnInit } from '@angular/core';
import { Team } from '../../models/team.model';
import { DataService } from '../../models/data.service';

import { Ng2SmartTableModule } from 'ng2-smart-table';

import { TeamMembers } from '../../models/teamMembers.model'
import { User } from '../../models/User.model';

@Component({
  selector: 'app-team-homepage',
  templateUrl: './team-homepage.component.html',
  styleUrls: ['./team-homepage.component.css'],
  //: [':host /deep/ ng2-smart-table {font-size:16px} :host /deep/ .customstyle {padding: 10px}'],
  //template: `
  //  <ng2-smart-table [settings]="settings" [source]="data"></ng2-smart-table>
  //`
})
export class TeamHomepageComponent implements OnInit {

  public TSM: string;
  public PO: string;
  public RTE: string;

  public Team: Team

  // public teammembers = {
  //   teamId: 8,
  //   teamName: 'Sprintellectuals',
  //   member: [ 
  //     {userid: 47, username: 'Speedy McSpeederson', role: 'SM', teamName: 'Sprintellectuals', artName: 'Test Train'},
  //     {userid: 48, username: 'Smartha Knowlegeberry', role: 'PO', teamName: 'Sprintellectuals', artName: 'Test Train'},
  //     {userid: 49, username: 'Rick Grimes', role: 'TL', teamName: 'Sprintellectuals', artName: 'Test Train'},
  //     {userid: 50, username: 'Carl Grimes', role: 'TM', teamName: 'Sprintellectuals', artName: 'Test Train'},
  //     {userid: 51, username: 'Daryl Dixon', role: 'TM', teamName: 'Sprintellectuals', artName: 'Test Train'},
  //     {userid: 52, username: 'Glenn Rhee', role: 'TM', teamName: 'Sprintellectuals', artName: 'Test Train'},
  //     {userid: 53, username: 'Guywith Sillyhat', role: 'RTE', teamName: 'Sprintellectuals', artName: 'Test Train'},
  //   ]
  // }

  teams$: Team[];
  

  settings = {
      columns: {
        name: {
          title: 'Name (role)',
        },
        email: {
          title: 'Email Address',
        },
        nickname: {
          title: 'Nickname',
        },
        employee: {
          title: 'Employee',
        }
      },
      defaultStyle: false,
      attr: {
        class: 'table table-bordered'
      }
    };

    data = [
    {
      name: "Speedy McSprinterson",
      email: "speedy.mcsprinterson@selective.com",
      nickname: "Speedy",
      employee: "Yes"
    },
    {
      name: "Smartha Knowledgeberry",
      email: "Smartha.Knowledgeberry@selective.com",
      nickname: "Smartha",
      employee: "Yes"
    },
    {
      name: "Guywith Sillyhat",
      email: "guywith.sillyhat@selective.com",
      nickname: "Guy",
      employee: "No"
    }
  ];


  constructor(private dataService: DataService) { }

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


    for (let i in this.Team.teamMembers)
    {
      if (this.Team.teamMembers[i].role == 'SM') {
        this.TSM = this.Team.teamMembers[i].username;
      }
      else if (this.Team.teamMembers[i].role == 'PO') {
        this.PO = this.Team.teamMembers[i].username;
      }
      else if (this.Team.teamMembers[i].role == 'RTE') {
        this.RTE = this.Team.teamMembers[i].username;
      }
    }
    
    return this.dataService.getTeams()
    .subscribe(data => this.teams$ = data);

  }

}
