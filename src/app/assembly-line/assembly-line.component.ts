import { Component, OnInit, ViewChild, AfterViewInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DBrepositoryService } from '../services/dbrepository.service';
import { environment } from '../../environments/environment';
import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';

@Component({
  selector: 'app-assembly-line',
  templateUrl: './assembly-line.component.html',
  styleUrls: ['./assembly-line.component.css']
})
export class AssemblyLineComponent implements OnInit , AfterViewInit {
  LocationID: string;
  AssemblyName: string;
  private readonly BASE_URL = environment.API_ENDPOINT;
  @ViewChild('IDAssemblyLineGrid', { static: false}) IDAssemblyLineGrid: jqxGridComponent;
  AssemblyLineGridSource: jqwidgets.GridSource;
  AssemblyLineGridOptions: jqwidgets.GridOptions;

  constructor(private _ActivatedRoute: ActivatedRoute, private DB: DBrepositoryService) { }

  ngOnInit() {
    this.LocationID = this._ActivatedRoute.snapshot.params.LocationID;
    this.AssemblyName = this._ActivatedRoute.snapshot.params.AssemblyName;
  }

  ngAfterViewInit() {

    this.AssemblyLineGridSource =  {
      datatype: 'json',
      url: this.BASE_URL + 'Production/GetAssemblyLineRecords/' + this.LocationID,
      sortcolumn: 'WorkOrderID',
      sortdirection: 'asc',
      id: 'WorkOrderID',
      pagesize: 15,
      // root: 'root',
      datafields: [
        { name: 'WorkOrderID', type: 'int' },
        { name: 'ProductName', type: 'string' },
        { name: 'OrderQty', type: 'int' },
        { name: 'CurrentStage', type: 'string' },
        { name: 'AssemblyArea', type: 'string' },
        { name: 'ActualResourceHrs', type: 'float' },
        { name: 'ActualCost', type: 'float' },
        { name: 'StartDate', type: 'string' },
        { name: 'EndDate', type: 'string' }
      ],
      sort: () => this.IDAssemblyLineGrid.updatebounddata('sort'),
      filter: () => this.IDAssemblyLineGrid.updatebounddata('filter'),
    };

    this.AssemblyLineGridOptions  = {
      width: 1050,
      pagesizeoptions: ['5', '10', '15'],
      theme: 'office',
      pageable: true,
      sortable: true,
      filterable: true,
      autoheight: true,
      virtualmode: true,
      enabletooltips: true,
      rendergridrows: (obj) =>  obj.data,
      source: new jqx.dataAdapter(this.AssemblyLineGridSource,
        {
          beforeSend: function (jqxhr, settings) {

         },
          loadError: function (xhr, status, error) {
            console.log(error);
          }
        }),
      columns: [
          { text: 'Work Order ID', datafield: 'WorkOrderID', width: 100, cellsalign: 'center' },
          { text: 'Product Name', datafield: 'ProductName', width: 200 },
          { text: 'Order Qty', datafield: 'OrderQty', width: 85, cellsalign: 'center' },
          { text: 'Current Stage', datafield: 'CurrentStage', width: 120 },
          { text: 'Assembly Area', datafield: 'AssemblyArea', width: 120 },
          { text: 'Resource Hrs', datafield: 'ActualResourceHrs', width: 110, cellsalign: 'center' },
          { text: 'Actual Cost', datafield: 'ActualCost', width: 100, cellsalign: 'center' },
          { text: 'Start Date', datafield: 'StartDate', width: 100, cellsalign: 'center' },
          { text: 'End Date', datafield: 'EndDate', width: 100, cellsalign: 'center' }
      ]
    };
    this.IDAssemblyLineGrid.createComponent(this.AssemblyLineGridOptions);
  }

}
