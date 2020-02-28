import { Component, OnInit } from '@angular/core';

import { Ng2SmartTableModule } from 'ng2-smart-table';

@Component({
  selector: 'app-milestones-alerts',
  templateUrl: './milestones-alerts.component.html',
  styleUrls: ['./milestones-alerts.component.css'],
  //: [':host /deep/ ng2-smart-table {font-size:16px} :host /deep/ .customstyle {padding: 10px}'],
  //template: `
  //  <ng2-smart-table [settings]="settings" [source]="data"></ng2-smart-table>
  //`
})
export class MilestonesAlertsComponent implements OnInit {

  settings = {
      columns: {
        id: {
          title: 'ID',
        },
        title: {
          title: 'Title',
        },
        message: {
          title: 'Message',
        },
        mOrA: {
          title: 'M or A',
        }
      },
      defaultStyle: false,
      attr: {
        class: 'table table-bordered'
      }
    };

    data = [
    {
      id: "2",
      title: "New Version",
      message: "Version 0.9 of the Big Business application is now available in STC!",
      mOrA: "A"
    },
    {
      id: "1",
      title: "Zero Defects",
      message: "The Sprintellectuals finished Sprint 24 with ZERO DEFECTS!",
      mOrA: "M"
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}
