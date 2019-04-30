import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DbrepositoryService } from '../services/dbrepository.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-production-line',
  templateUrl: './production-line.component.html',
  styleUrls: ['./production-line.component.css']
})
export class ProductionLineComponent implements OnInit {


  AssemblyLineDataSet: Array<{ LocationID: number, AssemblyName: string, CountWorkOrder: number, RoutingSequence: number }> = [];
  WorkOrderReceivedDataSet: any[];
  WorkOrderCompletedDataSet: any[];
  WorkOrderDelayedDataSet: any[];
  WorkOrderScrappedDataSet: any[];
  StockInventoryDataSet: any;

  constructor(private DB: DbrepositoryService , private _Router: Router) {
    this.GetAssemblyLineData();
    this.GetWorkOrderDetailsData();
    this.GetStockInventoryData();
  }
  ngOnInit() {
  }

  GetAssemblyLineData() {
    this.DB.GetAssemblyLineDataFromServer().subscribe(resp => {
      if (resp.length > 0) {
        this.AssemblyLineDataSet = resp.sort(function (c, n) {
          return c.RoutingSequence - n.RoutingSequence;
        });
      }
    });
  }

  GetWorkOrderDetailsData() {
    this.DB.GetWorkOrderDetailsDataFromServer().subscribe(resp => {
      if (resp.length > 0) {
        this.WorkOrderReceivedDataSet = [resp[0]];
        this.WorkOrderCompletedDataSet = [resp[1]];
        this.WorkOrderDelayedDataSet = [resp[2]];
        this.WorkOrderScrappedDataSet = [resp[3]];
      }
    });
  }

  GetStockInventoryData() {
    this.DB.GetStockInventoryDataFromServer().subscribe(resp => {
      if (resp.length > 0) {
        this.StockInventoryDataSet = resp;
      }
    });
    console.log(this.StockInventoryDataSet);
  }
  public ViewSelectedAssemblyLineDetails(LocationID: number): void {
    alert(LocationID);
    this._Router.navigate(['/production/assemblyline', { LocationID: LocationID}]);
  }

}
