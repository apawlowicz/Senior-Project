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
        {userid: 1, username: 'Jeremy', roleid: 5, role: 'RTE', teamid: 1, teamName: 'Sopranos',artid: 2, artName: 'Big Biz'},
        {userid: 1, username: 'Justin', roleid: 4, role: 'STE', teamid: 1, teamName: 'Sopranos',artid: 2, artName: 'Big Biz'},
        {userid: 1, username: 'SteveDM', roleid: 2, role: 'EX', teamid: 2, teamName: 'Agilistas',artid: 2, artName: 'Big Biz'},
        {userid: 1, username: 'Tim', roleid: 3, role: 'DM', teamid: 2, teamName: 'Agilistas',artid: 2, artName: 'Big Biz'},
        {userid: 1, username: 'Lisa', roleid: 4, role: 'STE', teamid: 3, teamName: 'Illuminati',artid: 2, artName: 'Big Biz'},
        
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
        {userid: 3, username: 'Meenal', roleid: 5, role: 'RTE', teamid: 6, teamName: 'Mandalorians', artid: 3, artName: 'CALMR'},
        {userid: 4, username: 'Russ', roleid: 4, role: 'STE', teamid: 1, teamName: 'Mandalorians', artid: 3, artName: 'CALMR'},
        {userid: 19, username: 'Socorro', roleid: 2, role: 'EX', teamid: 2, teamName: 'Mandalorians', artid: 3, artName: 'CALMR'},
        {userid: 14, username: 'Slyvia', roleid: 3, role: 'DM', teamid: 2, teamName: 'Team Awesome', artid: 3, artName: 'CALMR'},
        {userid: 16, username: 'Dino', roleid: 4, role: 'STE', teamid: 3, teamName: 'Team Awesome', artid: 3, artName: 'CALMR'},
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
    teamId: 1,
    teamName: 'Sopranos',
    member: [ 
      {userid: 46, username: 'Danilo', roleid: 7, role: 'SM', teamid: 1, teamName: 'Sopranos', artid: 2, artName: 'Big Biz'},
      {userid: 45, username: 'Augustus', roleid: 6, role: 'PO', teamid: 1, teamName: 'Sopranos', artid: 2, artName: 'Big Biz'},
      {userid: 44, username: 'Kristin', roleid: 8, role: 'SU', teamid: 1, teamName: 'Sopranos', artid: 2, artName: 'Big Biz'},
      {userid: 43, username: 'Andria', roleid: 8, role: 'SU', teamid: 1, teamName: 'Sopranos', artid: 2, artName: 'Big Biz'},
      {userid: 42, username: 'Fannie', roleid: 8, role: 'SU', teamid: 1, teamName: 'Sopranos', artid: 2, artName: 'Big Biz'},
      {userid: 41, username: 'Donovan',roleid: 8,  role: 'SU', teamid: 1, teamName: 'Sopranos', artid: 2, artName: 'Big Biz'},
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
