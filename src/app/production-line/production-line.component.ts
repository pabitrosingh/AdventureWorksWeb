import { Component, OnInit } from '@angular/core';
import { DBrepositoryService } from '../services/dbrepository.service';
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

  constructor(private DB: DBrepositoryService , private _Router: Router) {}

  ngOnInit() {
    this.GetAssemblyLineData();
    this.GetWorkOrderDetailsData();
    this.GetStockInventoryData();
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
  }

  AssemblyLineNameClick(LocationID: number, AssemblyName: string): void {
    this._Router.navigate(['/production/assemblyline', { LocationID: LocationID , AssemblyName: AssemblyName}]);
  }

  WorkOrderBtnClick(WorkOrderType: string): void {
    this._Router.navigate(['/production/workorder', { WorkOrderType: WorkOrderType }]);
  }
}
