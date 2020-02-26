import { Component, OnInit } from '@angular/core';

import { Ng2SmartTableModule } from 'ng2-smart-table';

@Component({
  selector: 'app-art-management',
  templateUrl: './art-management.component.html',
  styleUrls: ['./art-management.component.css'],
  //: [':host /deep/ ng2-smart-table {font-size:16px} :host /deep/ .customstyle {padding: 10px}'],
  //template: `
  //  <ng2-smart-table [settings]="settings" [source]="data"></ng2-smart-table>
  //`
})
export class ArtManagementComponent implements OnInit {

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


  constructor() { }

  ngOnInit() {
  }

}
