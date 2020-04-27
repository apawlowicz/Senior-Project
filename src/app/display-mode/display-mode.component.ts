import { Component, OnInit } from '@angular/core';
import { Team } from '../models/team.model';
import { DataService } from '../models/data.service';

@Component({
  selector: 'app-display-mode',
  templateUrl: './display-mode.component.html',
  styleUrls: ['./display-mode.component.css']
})

export class DisplayModeComponent implements OnInit{
  teams$: Team[];

  images = [944, 1011, 984];
  
  public Art = [
    { 
      artid: 2,
      artName: 'Big Biz',
      teams: [
        {teamId: 1, teamName: 'Sopranos', artName: 'Big Biz'},
        {teamId: 2, teamName: 'Agilistas', artName: 'Big Biz'},
        {teamId: 3, teamName: 'Illuminati', artName: 'Big Biz'},
      ],
      member: [ 
        {userid: 1, username: 'Jeremy', role: 'RTE', teamName: 'Sopranos', artName: 'Big Biz'},
        {userid: 2, username: 'Justin', role: 'STE', teamName: 'Illuminati', artName: 'Big Biz'},
      ] 
    },

    {
      artid: 3,
      artName: 'CALMR',
      teams: [
        {teamId: 6, teamName: 'Mandalorians', artName: 'CALMR'},
        {teamId: 7, teamName: 'Team Awesome', artName: 'CALMR'},
      ],
      member: [ 
        {userid: 3, username: 'Meenal', role: 'RTE', teamName: 'Mandalorians', artName: 'CALMR'},
        {userid: 4, username: 'Russ', role: 'STE', teamName: 'Mandalorians', artName: 'CALMR'},
      ] 
    }
  ];

  public ArtLabels1 = ['2007', '2008', '2009', '2010', '2011', '2012'];
  public ArtData1 = [
    {data: [59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];
  public ArtChart1 = "line";

  public ArtLabels2 = ['2007', '2008', '2009', '2010', '2011', '2012'];
  public ArtData2 = [
    {data: [59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];
  public ArtChart2 = "line";

  public ArtLabels3 = ['2007', '2008', '2009', '2010', '2011', '2012'];
  public ArtData3 = [
    {data: [59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];
  public ArtChart3 = 'bar';



  teammembers = {
    teamId: 8,
    teamName: 'Sprintellectuals',
    member: [ 
      {userid: 47, username: 'Speedy McSpeederson', role: 'SM', teamName: 'Sprintellectuals', artName: 'Test Train'},
      {userid: 48, username: 'Smartha Knowlegeberry', role: 'PO', teamName: 'Sprintellectuals', artName: 'Test Train'},
      {userid: 49, username: 'Rick Grimes', role: 'TL', teamName: 'Sprintellectuals', artName: 'Test Train'},
      {userid: 50, username: 'Carl Grimes', role: 'TM', teamName: 'Sprintellectuals', artName: 'Test Train'},
      {userid: 51, username: 'Daryl Dixon', role: 'TM', teamName: 'Sprintellectuals', artName: 'Test Train'},
      {userid: 52, username: 'Glenn Rhee', role: 'TM', teamName: 'Sprintellectuals', artName: 'Test Train'},
    ]
  }

  public TeamLabels1 = ['2007', '2008', '2009', '2010', '2011', '2012'];
  public TeamData1 = [
    {data: [59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];
  public TeamChart1 = "line";

  public TeamLabels2 = ['2007', '2008', '2009', '2010', '2011', '2012'];
  public TeamData2 = [
    {data: [59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];
  public TeamChart2 = "line";

  public TeamLabels3 = ['2007', '2008', '2009', '2010', '2011', '2012'];
  public TeamData3 = [
    {data: [59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];
  public TeamChart3 = 'bar';

  public TeamLabels4 = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  public TeamData4 = [120, 150, 180, 90];
  public TeamChart4 = 'pie';


  constructor(private dataService: DataService) {
  }

  ngOnInit(){
    return this.dataService.getTeams()
    .subscribe(data => this.teams$ = data);
  }
}
