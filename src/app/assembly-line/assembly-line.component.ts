import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DBrepositoryService } from '../services/dbrepository.service';

@Component({
  selector: 'app-assembly-line',
  templateUrl: './assembly-line.component.html',
  styleUrls: ['./assembly-line.component.css']
})
export class AssemblyLineComponent implements OnInit {

  LocationID: string;
  constructor(private _ActivatedRoute: ActivatedRoute, private DB: DBrepositoryService) {}

  ngOnInit() {
    // this._ActivatedRoute.params.subscribe(p => { console.log(p); } );
    // this._ActivatedRoute.paramMap.subscribe(p => {
    //   this.LocationID = p.get('LocationID');
    //   console.log(this.LocationID);
    //  });
    this.LocationID = this._ActivatedRoute.snapshot.params.LocationID;
    console.log(this.LocationID);
    this.DB.GetSelectedAssemblyLineRecordsFromServer(this.LocationID).subscribe(resp => {
      if (resp.length > 0) {
        console.log(resp);
      }
    });
  }

}
