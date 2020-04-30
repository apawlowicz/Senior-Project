import { Component, OnInit, Input } from '@angular/core';
import { chartData }  from '../../models/chartData.model';
import { TeamMembers } from '../../models/teamMembers.model'
import { User } from '../../models/User.model';
import { Team } from 'src/app/models/team.model';
import { ChartDataSet } from 'src/app/models/chartDataSet.model';

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

  @Input() public TeamName: string
  @Input() public team: Team
  public allMembers: Array<User> = []

  @Input() public chartlabels1: string[]
  public ChartLabels1: string[]
  @Input() public chartdata1: chartData[]
  public ChartData1: ChartDataSet[]
  @Input() public charttype1: string
  public ChartType1: string

  @Input() public chartlabels2: string[]
  public ChartLabels2: string[]
  @Input() public chartdata2: chartData[]
  public ChartData2: ChartDataSet[]
  @Input() public charttype2: string
  public ChartType2: string

  @Input() public chartlabels3: string[]
  public ChartLabels3: string[]
  @Input() public chartdata3: chartData[]
  public ChartData3: ChartDataSet[]
  @Input() public charttype3: string
  public ChartType3: string

  @Input() public chartlabels4: string[]
  public ChartLabels4: string[]
  @Input() public chartdata4: chartData[]
  public ChartData4: number[]
  @Input() public charttype4: string
  public ChartType4: string


  constructor() { }

  ngOnInit() {
    for (let i in this.team.teamMembers)
    {
      if (this.team.teamMembers[i].roleId == 6) {
        this.allMembers.push(this.team.teamMembers[i])
      }
      else if (this.team.teamMembers[i].roleId == 7) {
        this.allMembers.push(this.team.teamMembers[i])
      }
      else if (this.team.teamMembers[i].roleId == 8) {
        this.allMembers.push(this.team.teamMembers[i])
      }
    }

    this.ChartLabels1 = this.team.teamData[0].labels
    this.ChartData1 = this.team.teamData[0].dataSet
    this.ChartType1 = this.team.teamData[0].type

    this.ChartLabels2 = this.team.teamData[1].labels
    this.ChartData2 = this.team.teamData[1].dataSet
    this.ChartType2 = this.team.teamData[1].type

    this.ChartLabels3 = this.team.teamData[2].labels
    this.ChartData3 = this.team.teamData[2].dataSet
    this.ChartType3 = this.team.teamData[2].type

    this.ChartLabels4 = this.team.teamData[3].labels
    this.ChartData4 = this.team.teamData[3].dataSet[0].data
    this.ChartType4 = this.team.teamData[3].type

  }

}
