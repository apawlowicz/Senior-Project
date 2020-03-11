import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerModel } from '../models/CustomerModel';
import { DataService } from '../data.service';

@Component({
  selector: 'app-display-mode',
  templateUrl: './display-mode.component.html',
  styleUrls: ['./display-mode.component.css']
})
export class DisplayModeComponent implements OnInit {

  customers: CustomerModel[];

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.getAllCustomers();
  }

  getAllCustomers(): void {
    this.dataService.getAllCustomers().subscribe(data=>{
      this.customers = data;
    });
  };

}
