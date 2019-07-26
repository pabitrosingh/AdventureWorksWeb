import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';

@Component({
  selector: 'app-sales-order',
  templateUrl: './sales-order.component.html',
  styleUrls: ['./sales-order.component.css']
})
export class SalesOrderComponent implements OnInit , AfterViewInit {
  private readonly BASE_URL = environment.API_ENDPOINT;
  @ViewChild('IDSalesOrderHeaderGrid', { static: false}) IDSalesOrderHeaderGrid: jqxGridComponent;

  SalesOrderHeaderGridSource: jqwidgets.GridSource;
  SalesOrderHeaderGridOptions: jqwidgets.GridOptions;


  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {

    this.SalesOrderHeaderGridSource =  {
      datatype: 'json',
      url: this.BASE_URL + 'Sales/GetSalesOrderHeader/',
      sortcolumn: 'SalesOrderID',
      sortdirection: 'asc',
      id: 'SalesOrderID',
      pagesize: 15,
      // root: 'root',
      datafields: [
        { name: 'SalesOrderID', type: 'int' },
        { name: 'OrderDate', type: 'string' },
        { name: 'Status', type: 'string' },
        { name: 'AccountNumber', type: 'string' },
        { name: 'CustomerID', type: 'int' },
        { name: 'ShipDate', type: 'string' },
        { name: 'ShippedBy', type: 'string' },
        { name: 'TrackingNumber', type: 'string' },
        { name: 'SubTotal', type: 'float' },
        { name: 'DeliveryChg', type: 'float' },
        { name: 'TaxAmt', type: 'float' },
        { name: 'TotalDue', type: 'float' }
      ],
      sort: () => this.IDSalesOrderHeaderGrid.updatebounddata('sort'),
      filter: () => this.IDSalesOrderHeaderGrid.updatebounddata('filter'),
    };

    this.SalesOrderHeaderGridOptions  = {
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
      source: new jqx.dataAdapter(this.SalesOrderHeaderGridSource,
        {
          beforeSend: function (jqxhr, settings) {

         },
          loadError: function (xhr, status, error) {
            console.log(error);
          }
        }),
      columns: [
          { text: 'Sales Order ID', datafield: 'SalesOrderID', width: 100, cellsalign: 'center' },
          { text: 'Order Date', datafield: 'OrderDate', width: 100 , cellsalign: 'center'  },
          { text: 'Status', datafield: 'Status', width: 75 },
          { text: 'Account Number', datafield: 'AccountNumber', width: 120, cellsalign: 'center'  },
          { text: 'Customer ID', datafield: 'CustomerID', width: 80 , cellsalign: 'center'  },
          { text: 'Ship Date', datafield: 'ShipDate', width: 100, cellsalign: 'center' },
          { text: 'Shipped By', datafield: 'ShippedBy', width: 130, cellsalign: 'center' },
          { text: 'Tracking Number', datafield: 'TrackingNumber', width: 100, cellsalign: 'center' },
          { text: 'Sub. Total', datafield: 'SubTotal', width: 100, cellsalign: 'center' },
          { text: 'Delivery Chg.', datafield: 'DeliveryChg', width: 100, cellsalign: 'center' },
          { text: 'Tax Amt.', datafield: 'TaxAmt', width: 100, cellsalign: 'center' },
          { text: 'Total Due', datafield: 'TotalDue', width: 100, cellsalign: 'center' }
      ],
      rowdetails: true,
      initrowdetails: function(index: number, parentElement: any, gridElement: any, record: any): void {
         if (parentElement.children[0] != null) {
         const SalesOrderDetailerGridSource: jqwidgets.GridSource = {
          datatype: 'json',
          url: environment.API_ENDPOINT + 'Sales/GetSalesOrderDetailer/' + record.SalesOrderID,
          sortcolumn: 'SalesOrderDetailID',
          sortdirection: 'asc',
          id: 'SalesOrderDetailID',
          pagesize: 5,
          // root: 'root',
          datafields: [
            { name: 'SalesOrderDetailID', type: 'int' },
            { name: 'ProductID', type: 'int' },
            { name: 'Name', type: 'string' },
            { name: 'UnitPrice', type: 'float' },
            { name: 'OrderQty', type: 'int' },
            { name: 'LineTotal', type: 'float' }
          ],
          // sort: () => this.IDSalesOrderHeaderGrid.updatebounddata('sort'),
          // filter: () => this.IDSalesOrderHeaderGrid.updatebounddata('filter'),
         };
          const SalesOrderDetailerGridOptions: jqwidgets.GridOptions  = {
            width: 700,
            pagesizeoptions: ['5', '10', '15'],
            theme: 'office',
            pageable: true,
            sortable: true,
            filterable: false,
            autoheight: true,
            virtualmode: true,
            enabletooltips: true,
            rendergridrows: (obj) =>  obj.data,
            source: new jqx.dataAdapter(SalesOrderDetailerGridSource,
              {
                beforeSend: function (jqxhr, settings) {

               },
                loadError: function (xhr, status, error) {
                  console.log(error);
                }
              }),
            columns: [
                { text: 'Sales Order Detail ID', datafield: 'SalesOrderDetailID', width: 130 , cellsalign: 'center'  },
                { text: 'Product ID', datafield: 'ProductID', width: 100 , cellsalign: 'center' },
                { text: 'Name', datafield: 'Name', width: 150  },
                { text: 'Unit Price', datafield: 'UnitPrice', width: 100 , cellsalign: 'center'  },
                { text: 'Order Qty', datafield: 'OrderQty', width: 100, cellsalign: 'center' },
                { text: 'Line Total', datafield: 'LineTotal', width: 100, cellsalign: 'center' }
            ]
          };
          jqwidgets.createInstance(parentElement.children[0], 'jqxGrid', SalesOrderDetailerGridOptions );
         }
      },
      rowdetailstemplate: {
        rowdetails: '<div id="IDSalesOrderDetailer"></div>',
        rowdetailsheight: 250
      },
    };
    this.IDSalesOrderHeaderGrid.createComponent(this.SalesOrderHeaderGridOptions);

  }

}
