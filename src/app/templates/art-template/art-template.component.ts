import { Component, OnInit, Input } from '@angular/core';
import { chartData } from 'src/app/models/chartData.model';
import { ART } from 'src/app/models/ART.model';
import { Team } from 'src/app/models/team.model';
import { User } from 'src/app/models/User.model';

@Component({
  selector: 'app-art-template',
  templateUrl: './art-template.component.html',
  styleUrls: ['./art-template.component.css']
})
export class ArtTemplateComponent implements OnInit {
  public ChartOptions = {
    scaleShowVerticalLines: false,
    responsive: false,
    maintainAspectRatio: false,
  };

  @Input() public Art: ART;
  public Teams: Team[];
  public allMembers: Array<User> = [];

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

  constructor() { }

  ngOnInit() {
    for (let i in this.Art.member)
    {
      if (this.Art.member[i].roleid == 2) {
        this.allMembers.push(this.Art.member[i])
      }
      else if (this.Art.member[i].roleid == 3) {
        this.allMembers.push(this.Art.member[i])
      }
      else if (this.Art.member[i].roleid == 4) {
        this.allMembers.push(this.Art.member[i])
      }
      else if (this.Art.member[i].roleid == 5) {
        this.allMembers.push(this.Art.member[i])
      }
    }

    this.ChartLabels1 = this.chartlabels1;
    this.ChartData1 = this.chartdata1;
    this.ChartType1 = this.charttype1;

    this.ChartLabels2 = this.chartlabels2;
    this.ChartData2 = this.chartdata2;
    this.ChartType2 = this.charttype2;

    this.ChartLabels3 = this.chartlabels3;
    this.ChartData3 = this.chartdata3;
    this.ChartType3 = this.charttype3;

    this.Teams = this.Art.teams;
    this.allMembers = this.Art.member;

  }

}
