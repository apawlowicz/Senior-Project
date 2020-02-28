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
        teamname: {
          title: 'Team Name',
        },
        artName: {
          title: 'ART Name',
        },
        POname: {
          title: 'PO Name',
        },
        SMname: {
          title: 'SM Name',
        },
        twaURL: {
          title: 'URL of Team Working Agreement'
        }
      },
      defaultStyle: false,
      attr: {
        class: 'table table-bordered'
      }
    };

    data = [
    {
      teamname: "Sprintellectuals",
      artName: "Choo Choo",
      POname: "Smartha Knowledgeberry",
      SMname: "Speedy McSprinterson",
      twaURL: " "
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}
