import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-assembly-line',
  templateUrl: './assembly-line.component.html',
  styleUrls: ['./assembly-line.component.css']
})
export class AssemblyLineComponent implements OnInit {

  constructor(private _ActivatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    // this._ActivatedRoute.params.subscribe(p => { console.log(p); } );
    this._ActivatedRoute.paramMap.subscribe(p => { console.log(p.get('LocationID')); });
    //console.log(this._ActivatedRoute.snapshot.params.LocationID);
  }

}
