import { Component, OnInit } from '@angular/core';
import { Team } from '../../models/team.model';
import { DataService } from '../../models/data.service';

import { Ng2SmartTableModule } from 'ng2-smart-table';

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
    return this.dataService.getTeams()
    .subscribe(data => this.teams$ = data);
  }

}
