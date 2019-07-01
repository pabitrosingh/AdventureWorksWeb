import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatTreeModule } from '@angular/material/tree';

@Component({
  selector: 'app-work-order',
  templateUrl: './work-order.component.html',
  styleUrls: ['./work-order.component.css']
})
export class WorkOrderComponent implements OnInit, AfterViewInit {
  WorkOrderType: string = null;

  constructor(private _ActivatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.WorkOrderType = this._ActivatedRoute.snapshot.params.WorkOrderType;
    
  }

  ngAfterViewInit() {

  }

}
