import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { environment } from '../../environments/environment';
import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit , AfterViewInit {

  private readonly BASE_URL = environment.API_ENDPOINT;
  @ViewChild('IDProductInventoryGrid', { static: false }) IDProductInventoryGrid: jqxGridComponent;
  ProductInventoryGridSource: jqwidgets.GridSource;
  ProductInventoryGridOptions: jqwidgets.GridOptions;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.CreateProductInventoryGrid();
  }

  private CreateProductInventoryGrid(): void {
    this.ProductInventoryGridSource = {
      datatype: 'json',
      url: this.BASE_URL + 'Production/GetProductInventoryDetails/',
      sortcolumn: 'ProductID',
      sortdirection: 'asc',
      id: 'ProductID',
      pagesize: 5,
      // root: 'root',
      datafields: [
        { name: 'ProductID', type: 'int' },
        { name: 'Name', type: 'string' },
        { name: 'CurrentStock', type: 'int' },
        { name: 'SafetyStockLevel', type: 'int' }
      ],
      sort: () => this.IDProductInventoryGrid.updatebounddata('sort'),
      filter: () => this.IDProductInventoryGrid.updatebounddata('filter'),
    };
    this.ProductInventoryGridOptions = {
      width: 1050,
      theme: 'office',
      pageable: true,
      sortable: true,
      filterable: true,
      autoheight: true,
      virtualmode: true,
      enabletooltips: true,
      rendergridrows: (obj) => obj.data,
      source: new jqx.dataAdapter(this.ProductInventoryGridSource,
        {
          beforeSend: function (jqxhr, settings) {
          },
          loadError: function (xhr, status, error) {
            console.log(error);
          }
        }),
      columns: [
        { text: 'Product ID', datafield: 'ProductID', cellsalign: 'center' },
        { text: 'Name', datafield: 'Name',  width: 400 },
        { text: 'Current Stock', datafield: 'CurrentStock', cellsalign: 'center'},
        { text: 'Safety Stock Level', datafield: 'SafetyStockLevel', cellsalign: 'center'}
      ]
    };
    this.IDProductInventoryGrid.createComponent(this.ProductInventoryGridOptions);
  }
}
