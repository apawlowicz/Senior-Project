import { Component, OnInit } from '@angular/core';
import { Team } from '../models/team.model';
import { DataService } from '../models/data.service';
import { ART } from '../models/ART.model';
import { User } from '../models/User.model';
import { TemplateBinding } from '@angular/compiler';

@Component({
  selector: 'app-display-mode',
  templateUrl: './display-mode.component.html',
  styleUrls: ['./display-mode.component.css']
})

export class DisplayModeComponent implements OnInit {

  public initialized = false;

  public activeSlide: number
  public onSlide(slideData) {
    for (let i in this.Art) {
      document.getElementById(this.Art[i].artName).style.visibility = 'hidden'
    }
    this.activeSlide = slideData.current
    for (let i in this.Art) {
      if (this.activeSlide == this.Art[i].artId) {
        document.getElementById(this.Art[i].artName).style.visibility = 'visible'
      }
    }
    // console.log(this.activeSlide)
  }

  public Art: ART[]

  constructor(private dataService: DataService) {
  }


  ngOnInit() {
    // return this.dataService.getTeams()
    // .subscribe(data => this.teams$ = data);

    this.Art = [
      {
        artId: 1,
        artName: 'CALMR',
        artTeams: [
          {
            artId: 1, artName: 'CALMR', teamId: 1, teamName: 'Illuminati',
            teamMembers: [],
            teamData: [
              {
                type: 'line', labels: ['2019.2', '2019.3', '2019.4', '2020.1'],
                dataSet: [
                  { data: [1.5, 2, 2, 1], label: 'Productivity', fill: false },
                  { data: [2, 1, .5, 1.5], label: 'Predictability', fill: false },
                  { data: [1.5, 1, 2, 2], label: 'Quality', fill: false },
                  { data: [2, 2, 2, 1], label: 'Engagement', fill: false }
                ]
              },
              {
                type: 'line', labels: ['2019.2', '2019.3', '2019.4', '2020.1'],
                dataSet: [
                  { data: [2, 2, 1, 0], label: 'Backlog Health', fill: false },
                  { data: [1, 2, 2, 2], label: 'Distributed Decision Making', fill: false }
                ],
              },
              {
                type: 'line', labels: ['2019.2', '2019.3', '2019.4', '2020.1'],
                dataSet: [
                  { data: [1, 1, 0, 2], label: 'Defintion of Ready', fill: false },
                  { data: [1.5, .5, 2, 1], label: 'Definition of Done', fill: false }
                ]
              },
              {
                type: 'line', labels: ['2019.2', '2019.3', '2019.4', '2020.1'],
                dataSet: [
                  { data: [2, 2, 1, 1], label: 'Automated CI/CD', fill: false },
                  { data: [1, 2, 2, 0], label: 'Automated Unit Testing', fill: false }
                ]
              },
            ]
          },
          {
            artId: 1, artName: 'CALMR', teamId: 2, teamName: 'Scrum Lords',
            teamMembers: [],
            teamData: [
              {
                type: 'line', labels: ['2019.2', '2019.3', '2019.4', '2020.1'],
                dataSet: [
                  { data: [1, 1, 2, 2], label: 'Productivity', fill: false },
                  { data: [1.5, 2, 2, 1], label: 'Predictability', fill: false },
                  { data: [2, .5, 1, 1], label: 'Quality', fill: false },
                  { data: [2, 2, 2, 2], label: 'Engagement', fill: false }
                ]
              },
              {
                type: 'line', labels: ['2019.2', '2019.3', '2019.4', '2020.1'],
                dataSet: [
                  { data: [1, 1, 2, 2], label: 'Backlog Health', fill: false },
                  { data: [1, 1, 2, 2], label: 'Distributed Decision Making', fill: false }
                ],
              },
              {
                type: 'line', labels: ['2019.2', '2019.3', '2019.4', '2020.1'],
                dataSet: [
                  { data: [1, 2, 2, 0], label: 'Defintion of Ready', fill: false },
                  { data: [2, 2, 2, 2], label: 'Definition of Done', fill: false }
                ]
              },
              {
                type: 'line', labels: ['2019.2', '2019.3', '2019.4', '2020.1'],
                dataSet: [
                  { data: [2, 2, 2, 2], label: 'Automated CI/CD', fill: false },
                  { data: [2, 2, 2, 2], label: 'Automated Unit Testing', fill: false }
                ]
              },
            ]
          }
        ],
        artData: [
          {
            type: 'line', labels: ['2019.2', '2019.3', '2019.4', '2020.1'],
            dataSet: [
              { data: [2, 2, 1, 1.5], label: 'Backlog Health', fill: false },
              { data: [1.5, 1, 2, 2], label: 'Distributed Decision Making', fill: false }
            ],
          },
          {
            type: 'line', labels: ['2019.2', '2019.3', '2019.4', '2020.1'],
            dataSet: [
              { data: [1, 2, 0, 2], label: 'Defintion of Ready', fill: false },
              { data: [2, 1.5, 2, 2], label: 'Definition of Done', fill: false }
            ],
          },
          {
            type: 'line', labels: ['2019.2', '2019.3', '2019.4', '2020.1'],
            dataSet: [
              { data: [1, 2, 1.5, 0], label: 'Automated CI/CD', fill: false },
              { data: [2, 1, 2, 1], label: 'Automated Unit Testing', fill: false }
            ],
          },
        ]
      },
      {
        artId: 2,
        artName: 'Big Biz',
        artTeams: [
          {
            artId: 2, artName: 'Big Biz', teamId: 1, teamName: 'Sopranos',
            teamMembers: [],
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
          },
          {
            artId: 2, artName: 'Big Biz', teamId: 2, teamName: 'Angilistas',
            teamMembers: [],
            teamData: [
              {
                type: 'line', labels: ['2019.2', '2019.3', '2019.4', '2020.1'],
                dataSet: [
                  { data: [2, 1, 1.5, 1], label: 'Productivity', fill: false },
                  { data: [1, 1, 2, 2], label: 'Predictability', fill: false },
                  { data: [.5, 2, 2, 2], label: 'Quality', fill: false },
                  { data: [2, 1, 1, 2], label: 'Engagement', fill: false }
                ]
              },
              {
                type: 'line', labels: ['2019.2', '2019.3', '2019.4', '2020.1'],
                dataSet: [
                  { data: [2, 2, 2, 2], label: 'Backlog Health', fill: false },
                  { data: [2, 0, 1, 0], label: 'Distributed Decision Making', fill: false }
                ],
              },
              {
                type: 'line', labels: ['2019.2', '2019.3', '2019.4', '2020.1'],
                dataSet: [
                  { data: [1, 2, 2, 2], label: 'Defintion of Ready', fill: false },
                  { data: [1, 0, 2, 2], label: 'Definition of Done', fill: false }
                ]
              },
              {
                type: 'line', labels: ['2019.2', '2019.3', '2019.4', '2020.1'],
                dataSet: [
                  { data: [1, 2, 2, 2], label: 'Automated CI/CD', fill: false },
                  { data: [0, 2, 2, 2], label: 'Automated Unit Testing', fill: false }
                ]
              },
            ]
          }
        ],
        artData: [
          {
            type: 'line', labels: ['2019.2', '2019.3', '2019.4', '2020.1'],
            dataSet: [
              { data: [1, 2, 2, 1], label: 'Backlog Health', fill: false },
              { data: [0, 2, 1.5, 1], label: 'Distributed Decision Making', fill: false }
            ],
          },
          {
            type: 'line', labels: ['2019.2', '2019.3', '2019.4', '2020.1'],
            dataSet: [
              { data: [2, 2, 0, 2], label: 'Defintion of Ready', fill: false },
              { data: [1, .5, 1, 2], label: 'Definition of Done', fill: false }
            ],
          },
          {
            type: 'line', labels: ['2019.2', '2019.3', '2019.4', '2020.1'],
            dataSet: [
              { data: [2, 1, 1, .5], label: 'Automated CI/CD', fill: false },
              { data: [1, 2, 1, 1], label: 'Automated Unit Testing', fill: false }
            ],
          },
        ]
      }
    ]
  }

  ngAfterViewInit() {
    this.Art.forEach((artData) => {
      artData.artTeams.forEach((teamData) => {
        this.dataService.getUser(teamData.teamId, artData.artId).subscribe(data => {
          teamData.teamMembers = data;

          if(artData.artId === this.Art[this.Art.length-1].artId && teamData.teamId === artData.artTeams[artData.artTeams.length-1].teamId)
            this.initialized = true;

        });
      })
    })

    setTimeout(() => {
      document.getElementById(this.Art[0].artName).style.visibility = 'visible'
    }, 500)
  }
  
}
