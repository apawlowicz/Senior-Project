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

  

  public pieChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
    public pieChartData = [120, 150, 180, 90];
    public pieChartType = 'pie';

    public barChartOptions = {
      scaleShowVerticalLines: false,
      responsive: true,
      maintainAspectRatio: false,
  
    };
    public barChartLabels = ['2007', '2008', '2009', '2010', '2011', '2012'];
    public barChartType = 'bar';
    public barChartLegend = true;
    public barChartData = [
      {data: [59, 80, 81, 56, 55, 40], label: 'Series A'},
      {data: [48, 40, 19, 86, 27, 90], label: 'Series B'}
    ];

  constructor(private dataService: DataService) {
  }

  ngOnInit(){
    return this.dataService.getTeams()
    .subscribe(data => this.teams$ = data);
  }
}
