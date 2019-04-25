import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-production-line',
  templateUrl: './production-line.component.html',
  styleUrls: ['./production-line.component.css']
})
export class ProductionLineComponent implements OnInit {

  constructor() { }

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

}
