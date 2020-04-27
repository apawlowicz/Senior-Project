import { Component, OnInit, Input } from '@angular/core';
import { chartData }  from '../../models/chartData.model';
import { TeamMembers } from '../../models/teamMembers.model'
import { User } from '../../models/User.model';

@Component({
  selector: 'app-team-template',
  templateUrl: './team-template.component.html',
  styleUrls: ['./team-template.component.css']
})
export class TeamTemplateComponent implements OnInit {

  public ChartOptions = {
    scaleShowVerticalLines: false,
    responsive: false,
    maintainAspectRatio: false,
  };

  // @Input() public Width: number;
  // @Input() public Height: number;
  // public H: number;
  // public W: number;

  @Input() public TeamName: string;
  @Input() public TeamMembers: TeamMembers;
  public allMembers: Array<User>;

  @Input() public chartlabels1: string[];
  public ChartLabels1: string[];
  @Input() public chartdata1: chartData[];
  public ChartData1: chartData[];
  @Input() public charttype1: string;
  public ChartType1: string;

  @Input() public chartlabels2: string[];
  public ChartLabels2: string[];
  @Input() public chartdata2: chartData[];
  public ChartData2: chartData[];
  @Input() public charttype2: string;
  public ChartType2: string;

  @Input() public chartlabels3: string[];
  public ChartLabels3: string[];
  @Input() public chartdata3: chartData[];
  public ChartData3: chartData[];
  @Input() public charttype3: string;
  public ChartType3: string;

  @Input() public chartlabels4: string[];
  public ChartLabels4: string[];
  @Input() public chartdata4: chartData[];
  public ChartData4: chartData[];
  @Input() public charttype4: string;
  public ChartType4: string;


  constructor() { }

  ngOnInit() {
    // this.W = this.Width;
    // this.H = this.Height;

    this.ChartLabels1 = this.chartlabels1;
    this.ChartData1 = this.chartdata1;
    this.ChartType1 = this.charttype1;

    this.ChartLabels2 = this.chartlabels2;
    this.ChartData2 = this.chartdata2;
    this.ChartType2 = this.charttype2;

    this.ChartLabels3 = this.chartlabels3;
    this.ChartData3 = this.chartdata3;
    this.ChartType3 = this.charttype3;

    this.ChartLabels4 = this.chartlabels4;
    this.ChartData4 = this.chartdata4;
    this.ChartType4 = this.charttype4;

    this.allMembers = this.TeamMembers.member;
  }

}
