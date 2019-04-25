import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DbrepositoryService } from '../services/dbrepository.service';

@Component({
  selector: 'app-production-line',
  templateUrl: './production-line.component.html',
  styleUrls: ['./production-line.component.css']
})
export class ProductionLineComponent implements OnInit {

  AssemblyLineDataSet: Array<{ AssemblyName: string , CountWorkOrder: number , RoutingSequence: number }> = [];

  constructor(private DB: DbrepositoryService) {
      this.GetAssemblyLineData();

  }

  WorkOrderReceivedDataSet: any[] = [
    {
      'name': ' ',
      'value': 72591
    },
  ];

  WorkOrderCompletedDataSet: any[] = [
    {
      'name': ' ',
      'value': 49801
    },
  ];


  WorkOrderScrappedDataSet: any[] = [
    {
      'name': ' ',
      'value': 728
    },
  ];

  WorkOrderDelayedDataSet: any[] = [
    {
      'name': ' ',
      'value': 22790
    },
  ];
  ngOnInit() {
  }

  GetAssemblyLineData() {

    this.DB.GetAssemblyLineDataFromServer().subscribe(resp => {
      if ( resp.length > 0) {
        this.AssemblyLineDataSet = resp.sort(function(c, n ) {
          return c.RoutingSequence - n.RoutingSequence;
        });
      }
      // let obj = { AssemblyName: "Paint",
      //            CountWorkOrder: this.AssemblyLineDataSet[4].CountWorkOrder + this.AssemblyLineDataSet[3].CountWorkOrder,
      //            RoutingSequence: 4
      //           };
      // this.AssemblyLineDataSet.push(obj);
      //  this.AssemblyLineDataSet.splice(4,1);
      //  this.AssemblyLineDataSet.splice(3,1);
      console.log(this.AssemblyLineDataSet);
    });
}
}
