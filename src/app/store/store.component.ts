import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  Centerlat = 0;
  Centerlng = 0;

  constructor() { }

  ngOnInit() {
  }

}

// https://nominatim.openstreetmap.org/search?q=bangalore&format=json&limit=1
