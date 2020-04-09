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

  constructor(private dataService: DataService) {
  }

  ngOnInit(){
    return this.dataService.getTeams()
    .subscribe(data => this.teams$ = data);
  }
}
