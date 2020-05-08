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

  @Input() public Art: ART
  public art: ART
  public Teams: Team[]
  public allMembers: Array<User> = []

  public PI: number
  public defects: string
  
  constructor() { }

  ngOnInit() {
    this.PI = 8
    this.defects = "50"
    
    for (let i in this.Art.artTeams) {
      for (let j in this.Art.artTeams[i].teamMembers) {
        if (this.Art.artTeams[i].teamMembers[j].roleId == 2) {
          this.allMembers.push(this.Art.artTeams[i].teamMembers[j])
        }
        else if (this.Art.artTeams[i].teamMembers[j].roleId == 3) {
          this.allMembers.push(this.Art.artTeams[i].teamMembers[j])
        }
        else if (this.Art.artTeams[i].teamMembers[j].roleId == 4) {
          this.allMembers.push(this.Art.artTeams[i].teamMembers[j])
        }
        else if (this.Art.artTeams[i].teamMembers[j].roleId == 5) {
          this.allMembers.push(this.Art.artTeams[i].teamMembers[j])
        }
      }
    }

    this.Teams = this.Art.artTeams
    this.art = this.Art

  }

  ngAfterViewInit() {
  
  }

}
