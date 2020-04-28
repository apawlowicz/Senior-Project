import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-entry',
  templateUrl: './data-entry.component.html',
  styleUrls: ['./data-entry.component.css']
})
export class DataEntryComponent implements OnInit {
  // images = [944, 1011, 984];
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);


  constructor() { }

  ngOnInit() {
    
  }

}