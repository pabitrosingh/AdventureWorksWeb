import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.css']
})
export class VendorsComponent implements OnInit , AfterViewInit {
  private readonly BASE_URL = environment.API_ENDPOINT;
  @ViewChild('IDVendorDetailsGrid', { static: false}) IDVendorDetailsGrid: jqxGridComponent;

  IDVendorDetailsGridSource: jqwidgets.GridSource;
  IDVendorDetailsGridOptions: jqwidgets.GridOptions;

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.IDVendorDetailsGridSource =  {
      datatype: 'json',
      url: this.BASE_URL + 'Purchasing/GetVendorDetails',
      sortcolumn: 'BusinessEntityID',
      sortdirection: 'asc',
      id: 'BusinessEntityID',
      pagesize: 15,
      root: 'root',
      datafields: [
        { name: 'BusinessEntityID', type: 'int' },
        { name: 'VendorName', type: 'string' },
        { name: 'AddressLine1', type: 'string' },
        { name: 'City', type: 'string' },
        { name: 'StateProvinceName', type: 'string' },
        { name: 'CountryRegionName', type: 'string' },
        { name: 'PostalCode', type: 'number' },
        { name: 'ContactType', type: 'string' },
        { name: 'FirstName', type: 'string' },
        { name: 'LastName', type: 'string' },
        { name: 'PhoneNumber', type: 'string' },
        { name: 'EmailAddress', type: 'string' }
      ]
    };

    this.IDVendorDetailsGridOptions  = {
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
      source: new jqx.dataAdapter(this.IDVendorDetailsGridSource,
        {
          beforeSend: function (jqxhr, settings) {

         },
          loadError: function (xhr, status, error) {
            console.log(error);
          }
        }),
      columns: [
          { text: 'Vender ID', datafield: 'BusinessEntityID', width: 75, cellsalign: 'center' },
          { text: 'Name', datafield: 'VendorName', width: 200 },
          { text: 'Address', datafield: 'AddressLine1', width: 150},
          { text: 'City', datafield: 'City', width: 100 },
          { text: 'State /Province', datafield: 'StateProvinceName', width: 100 },
          { text: 'Country /Region', datafield: 'CountryRegionName', width: 100 },
          { text: 'Postal Code', datafield: 'PostalCode', width: 75, cellsalign: 'center' },
          { text: 'Contact Type', datafield: 'ContactType', width: 100 },
          { text: 'First Name', datafield: 'FirstName', width: 100  },
          { text: 'Last Name', datafield: 'LastName', width: 75 },
          { text: 'PhoneNumber', datafield: 'PhoneNumber', width: 100, cellsalign: 'center' },
          { text: 'Email', datafield: 'EmailAddress', width: 200 }
      ]
    };
    this.IDVendorDetailsGrid.createComponent(this.IDVendorDetailsGridOptions);
  }
}
