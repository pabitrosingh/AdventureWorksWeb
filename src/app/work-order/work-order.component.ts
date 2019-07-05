import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment';
import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';

@Component({
  selector: 'app-work-order',
  templateUrl: './work-order.component.html',
  styleUrls: ['./work-order.component.css']
})
export class WorkOrderComponent implements OnInit, AfterViewInit {

  WorkOrderType: string = null;
  private readonly BASE_URL = environment.API_ENDPOINT;
  @ViewChild('IDWorkOrderDetailsGrid', { static: false }) IDWorkOrderDetailsGrid: jqxGridComponent;
  WorkOrderDetailsGridSource: jqwidgets.GridSource;
  WorkOrderDetailsGridOptions: jqwidgets.GridOptions;

  constructor(private _ActivatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.WorkOrderType = this._ActivatedRoute.snapshot.params.WorkOrderType;
  }

  ngAfterViewInit() {
    this.CreateWorkOrderDetailsGrid();
  }

  private CreateWorkOrderDetailsGrid(): void {
    if (this.WorkOrderType !== 'Scraped') {
      this.WorkOrderDetailsGridSource = {
        datatype: 'json',
        url: this.BASE_URL + 'Production/GetWorkOrderDetails/' + this.WorkOrderType,
        sortcolumn: 'WorkOrderID',
        sortdirection: 'asc',
        id: 'WorkOrderID',
        pagesize: 15,
        // root: 'root',
        datafields: [
          { name: 'WorkOrderID', type: 'int' },
          { name: 'ProductID', type: 'string' },
          { name: 'OrderQty', type: 'int' },
          { name: 'StockedQty', type: 'int' },
          { name: 'StartDate', type: 'string' },
          { name: 'EndDate', type: 'string' },
          { name: 'DueDate', type: 'string' }
        ],
        sort: () => this.IDWorkOrderDetailsGrid.updatebounddata('sort'),
        filter: () => this.IDWorkOrderDetailsGrid.updatebounddata('filter'),
      };
      this.WorkOrderDetailsGridOptions = {
        width: 1050,
        pagesizeoptions: ['5', '10', '15'],
        theme: 'office',
        pageable: true,
        sortable: true,
        filterable: true,
        autoheight: true,
        virtualmode: true,
        enabletooltips: true,
        rendergridrows: (obj) => obj.data,
        source: new jqx.dataAdapter(this.WorkOrderDetailsGridSource,
          {
            beforeSend: function (jqxhr, settings) {
            },
            loadError: function (xhr, status, error) {
              console.log(error);
            }
          }),
        columns: [
          { text: 'Work Order ID', datafield: 'WorkOrderID', cellsalign: 'center' },
          { text: 'Product ID', datafield: 'ProductID', cellsalign: 'center'},
          { text: 'Order Qty', datafield: 'OrderQty', cellsalign: 'center' },
          { text: 'Stocked Qty', datafield: 'StockedQty', cellsalign: 'center'},
          { text: 'Start Date', datafield: 'StartDate', cellsalign: 'center'},
          { text: 'End Date', datafield: 'EndDate', cellsalign: 'center' },
          { text: 'Due Date', datafield: 'DueDate', cellsalign: 'center' }
        ]
      };
    } else {
      this.WorkOrderDetailsGridSource = {
        datatype: 'json',
        url: this.BASE_URL + 'Production/GetWorkOrderDetails/' + this.WorkOrderType,
        sortcolumn: 'WorkOrderID',
        sortdirection: 'asc',
        id: 'WorkOrderID',
        pagesize: 15,
        // root: 'root',
        datafields: [
          { name: 'WorkOrderID', type: 'int' },
          { name: 'ProductID', type: 'string' },
          { name: 'OrderQty', type: 'int' },
          { name: 'StockedQty', type: 'int' },
          { name: 'ScrappedQty', type: 'int' },
          { name: 'Name', type: 'string' }
        ],
        sort: () => this.IDWorkOrderDetailsGrid.updatebounddata('sort'),
        filter: () => this.IDWorkOrderDetailsGrid.updatebounddata('filter'),
      };
      this.WorkOrderDetailsGridOptions = {
        width: 1050,
        pagesizeoptions: ['5', '10', '15'],
        theme: 'office',
        pageable: true,
        sortable: true,
        filterable: true,
        autoheight: true,
        virtualmode: true,
        enabletooltips: true,
        rendergridrows: (obj) => obj.data,
        source: new jqx.dataAdapter(this.WorkOrderDetailsGridSource,
          {
            beforeSend: function (jqxhr, settings) {
            },
            loadError: function (xhr, status, error) {
              console.log(error);
            }
          }),
        columns: [
          { text: 'Work Order ID', datafield: 'WorkOrderID', cellsalign: 'center' },
          { text: 'Product ID', datafield: 'ProductID', cellsalign: 'center' },
          { text: 'Order Qty', datafield: 'OrderQty', cellsalign: 'center' },
          { text: 'Stocked Qty', datafield: 'StockedQty', cellsalign: 'center' },
          { text: 'Scrapped Qty', datafield: 'ScrappedQty', cellsalign: 'center'},
          { text: 'Reason', datafield: 'Name', width: 300 }
        ]
      };
    }
    this.IDWorkOrderDetailsGrid.createComponent(this.WorkOrderDetailsGridOptions);
  }
}
