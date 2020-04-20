import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-management',
  templateUrl: './team-management.component.html',
  styleUrls: ['./team-management.component.css']
})
export class TeamManagementComponent implements OnInit {

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
