import { Component, OnInit } from '@angular/core';
import { Team } from '../models/team.model';
import { DataService } from '../models/data.service';

@Component({
  selector: 'app-display-mode',
  templateUrl: './display-mode.component.html',
  styleUrls: ['./display-mode.component.css']
})

export class DisplayModeComponent implements OnInit{

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
    console.log(this.activeSlide)
  }

  
  public Art = [
    { 
      artId: 2,
      artName: 'Big Biz',
      teams: [
        {artId: 2, artName: 'Big Biz', teamId: 1, teamName: 'Sopranos', 
          teamMembers: [ 
            {userId: 1, username: 'Jeremy', roleId: 5, role: 'RTE', teamId: 1, teamName: 'Sopranos',artId: 2, artName: 'Big Biz'},
            {userId: 2, username: 'Justin', roleId: 4, role: 'STE', teamId: 1, teamName: 'Sopranos',artId: 2, artName: 'Big Biz'},
            {userId: 46, username: 'Danilo', roleId: 7, role: 'SM', teamId: 1, teamName: 'Sopranos', artId: 2, artName: 'Big Biz'},
            {userId: 45, username: 'Augustus', roleId: 6, role: 'PO', teamId: 1, teamName: 'Sopranos', artId: 2, artName: 'Big Biz'},
            {userId: 44, username: 'Kristin', roleId: 8, role: 'SU', teamId: 1, teamName: 'Sopranos', artId: 2, artName: 'Big Biz'},
            {userId: 43, username: 'Andria', roleId: 8, role: 'SU', teamId: 1, teamName: 'Sopranos', artId: 2, artName: 'Big Biz'},
            {userId: 41, username: 'Donovan',roleId: 8,  role: 'SU', teamId: 1, teamName: 'Sopranos', artId: 2, artName: 'Big Biz'},
          ]},
        {artId: 2, artName: 'Big Biz', teamId: 2, teamName: 'Agilistas', 
          teamMembers: [
            {userId: 6, username: 'SteveDM', roleId: 2, role: 'EX', teamId: 2, teamName: 'Agilistas',artId: 2, artName: 'Big Biz'},
            {userId: 11, username: 'Tim', roleId: 3, role: 'DM', teamId: 2, teamName: 'Agilistas',artId: 2, artName: 'Big Biz'},
            {userId: 42, username: 'Fannie', roleId: 8, role: 'SU', teamId: 2, teamName: 'Agilistas', artId: 2, artName: 'Big Biz'},
          ]},
        {artId: 2, artName: 'Big Biz', teamId: 3, teamName: 'Illuminati', 
          teamMembers: [
            {userId: 8, username: 'Lisa', roleId: 4, role: 'STE', teamId: 3, teamName: 'Illuminati',artId: 2, artName: 'Big Biz'},
            {userId: 18, username: 'Katheleen', roleId: 8, role: 'SU', teamId: 3, teamName: 'Illuminati', artId: 2, artName: 'Big Biz'},
          ]},
      ]
    },

    {
      artId: 3,
      artName: 'CALMR',
      teams: [
        {artId: 3, artName: 'CALMR', teamId: 6, teamName: 'Mandalorians', 
          teamMembers: [
            {userId: 3, username: 'Meenal', roleId: 5, role: 'RTE', teamId: 6, teamName: 'Mandalorians', artId: 3, artName: 'CALMR'},
            {userId: 4, username: 'Russ', roleId: 4, role: 'STE', teamId: 1, teamName: 'Mandalorians', artId: 3, artName: 'CALMR'},
            {userId: 19, username: 'Socorro', roleId: 2, role: 'EX', teamId: 2, teamName: 'Mandalorians', artId: 3, artName: 'CALMR'},
          ]},
        {artId: 3, artName: 'CALMR', teamId: 7, teamName: 'Team Awesome', 
          teamMembers: [
            {userId: 14, username: 'Slyvia', roleId: 3, role: 'DM', teamId: 2, teamName: 'Team Awesome', artId: 3, artName: 'CALMR'},
            {userId: 16, username: 'Dino', roleId: 4, role: 'STE', teamId: 3, teamName: 'Team Awesome', artId: 3, artName: 'CALMR'},
          ]},
      ],
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
    // return this.dataService.getTeams()
    // .subscribe(data => this.teams$ = data);
    
  }

  ngAfterViewInit() {
    document.getElementById(this.Art[0].artName).style.visibility = 'visible'
  }
}
