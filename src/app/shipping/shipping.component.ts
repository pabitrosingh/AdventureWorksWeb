import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit , AfterViewInit {
  private readonly BASE_URL = environment.API_ENDPOINT;
  @ViewChild('IDShippingGrid', { static: false}) IDShippingGrid: jqxGridComponent;

  IDShippingGridSource: jqwidgets.GridSource;
  IDShippingGridOptions: jqwidgets.GridOptions;

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.IDShippingGridSource =  {
      datatype: 'json',
      url: this.BASE_URL + 'Purchasing/GetShippingRateChart/',
      sortcolumn: 'ShipMethodID',
      sortdirection: 'asc',
      id: 'ShipMethodID',
      pagesize: 15,
      // root: 'root',
      datafields: [
        { name: 'ShipMethodID', type: 'int' },
        { name: 'Name', type: 'string' },
        { name: 'ShipBase', type: 'float' },
        { name: 'ShipRate', type: 'float' }
      ]
    };

    this.IDShippingGridOptions  = {
      width: 500,
      pagesizeoptions: ['5', '10', '15'],
      theme: 'office',
      pageable: true,
      sortable: false,
      filterable: false,
      autoheight: true,
      virtualmode: true,
      enabletooltips: true,
      rendergridrows: (obj) =>  obj.data,
      source: new jqx.dataAdapter(this.IDShippingGridSource,
        {
          beforeSend: function (jqxhr, settings) {

         },
          loadError: function (xhr, status, error) {
            console.log(error);
          }
        }),
      columns: [
          { text: 'ID', datafield: 'ShipMethodID', width: 100, cellsalign: 'center' },
          { text: 'Name', datafield: 'Name', width: 200 },
          { text: 'Ship Base', datafield: 'ShipBase', width: 100, cellsalign: 'center' },
          { text: 'Ship Rate', datafield: 'ShipRate', width: 100, cellsalign: 'center' }
      ]
    };
    this.IDShippingGrid.createComponent(this.IDShippingGridOptions);
  }
}
