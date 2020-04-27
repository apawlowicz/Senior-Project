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

  public teammembers = {
    teamId: 8,
    teamName: 'Sprintellectuals',
    member: [ 
      {userid: 47, username: 'Speedy McSpeederson', role: 'SM', teamName: 'Sprintellectuals', artName: 'Test Train'},
      {userid: 48, username: 'Smartha Knowlegeberry', role: 'PO', teamName: 'Sprintellectuals', artName: 'Test Train'},
      {userid: 49, username: 'Rick Grimes', role: 'TL', teamName: 'Sprintellectuals', artName: 'Test Train'},
      {userid: 50, username: 'Carl Grimes', role: 'TM', teamName: 'Sprintellectuals', artName: 'Test Train'},
      {userid: 51, username: 'Daryl Dixon', role: 'TM', teamName: 'Sprintellectuals', artName: 'Test Train'},
      {userid: 52, username: 'Glenn Rhee', role: 'TM', teamName: 'Sprintellectuals', artName: 'Test Train'},
      {userid: 53, username: 'Guywith Sillyhat', role: 'RTE', teamName: 'Sprintellectuals', artName: 'Test Train'},
    ]
  }

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

    for (let i in this.teammembers.member)
    {
      if (this.teammembers.member[i].role == 'SM') {
        this.TSM = this.teammembers.member[i].username;
      }
      else if (this.teammembers.member[i].role == 'PO') {
        this.PO = this.teammembers.member[i].username;
      }
      else if (this.teammembers.member[i].role == 'RTE') {
        this.RTE = this.teammembers.member[i].username;
      }
    }
    
    return this.dataService.getTeams()
    .subscribe(data => this.teams$ = data);

  }

}
