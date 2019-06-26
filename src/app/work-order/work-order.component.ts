import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatTreeModule } from '@angular/material/tree';
import { AgGridAngular } from 'ag-grid-angular';
import { GridOptions , ColDef  } from 'ag-grid-community';


@Component({
  selector: 'app-work-order',
  templateUrl: './work-order.component.html',
  styleUrls: ['./work-order.component.css']
})
export class WorkOrderComponent implements OnInit, AfterViewInit {

  @ViewChild('WorkOrderGrid') WorkOrderGrid: AgGridAngular;
  WorkOrderType: string = null;
  WorkOrderGridOptions: GridOptions;


  columnDefs  = [
    { headerName: 'Make', field: 'make' },
    { headerName: 'Model', field: 'model' },
    { headerName: 'Price', field: 'price' }
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];
  constructor(private _ActivatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.WorkOrderType = this._ActivatedRoute.snapshot.params.WorkOrderType;

    this.WorkOrderGridOptions = {
      pagination: true,
      columnDefs: [
        { headerName: 'Make', field: 'make' },
        { headerName: 'Model', field: 'model' },
        { headerName: 'Price', field: 'price' }
      ],
      rowData: [
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxter', price: 72000 }
      ]
    };
  }

  ngAfterViewInit() {

  }

}
