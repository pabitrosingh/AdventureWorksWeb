import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit, AfterViewInit {
  private readonly BASE_URL = environment.API_ENDPOINT;
  @ViewChild('IDStockGrid', { static: false}) IDStockGrid: jqxGridComponent;

  IDStockGridSource: jqwidgets.GridSource;
  IDStockGridIDOptions: jqwidgets.GridOptions;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.IDStockGridSource =  {
      datatype: 'json',
      url: this.BASE_URL + 'Purchasing/GetLowRunningStock/',
      sortcolumn: 'ProductID',
      sortdirection: 'asc',
      id: 'ProductID',
      pagesize: 5,
      root: 'root',
      datafields: [
        { name: 'ProductID', type: 'int' },
        { name: 'Name', type: 'string' },
        { name: 'CurrentStock', type: 'int' },
        { name: 'SafetyStockLevel', type: 'int' }
      ]
    };

    this.IDStockGridIDOptions  = {
      width: 550,
      pagesizeoptions: ['5', '10', '15'],
      theme: 'office',
      pageable: true,
      sortable: true,
      filterable: true,
      autoheight: true,
      virtualmode: true,
      enabletooltips: true,
      rendergridrows: (obj) =>  obj.data,
      source: new jqx.dataAdapter(this.IDStockGridSource,
        {
          beforeSend: function (jqxhr, settings) {

         },
          loadError: function (xhr, status, error) {
            console.log(error);
          }
        }),
      columns: [
          { text: 'Product ID', datafield: 'ProductID', width: 100, cellsalign: 'center' },
          { text: 'Product Name', datafield: 'Name', width: 200 },
          { text: 'Current Stock', datafield: 'CurrentStock', width: 100, cellsalign: 'center' },
          { text: 'Safety Stock Level', datafield: 'SafetyStockLevel', width: 150, cellsalign: 'center' }
      ]
    };
    this.IDStockGrid.createComponent(this.IDStockGridIDOptions);
  }

}
