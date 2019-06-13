import {
  Component,
  ViewChild,
  ElementRef,
  OnInit,
  AfterViewInit
} from '@angular/core';
import { DbrepositoryService } from '../services/dbrepository.service';
import { Chart } from 'chart.js';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import dayGridPlugin from '@fullcalendar/daygrid';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  
  calendarPlugins = [dayGridPlugin];
  
  TerritoryPiGridChartDataSet: any[] = [
    {
      'name': 'Germany',
      'value': 8940000
    },
    {
      'name': 'USA',
      'value': 5000000
    }
  ];

  CustomerLineChartDataset:any = [{
    "name": "Total Customers",
    "series": [
      {
        "value": 20,
        "name": "2011"
      },
      {
        "value": 50,
        "name": "2012"
      },
      {
        "value": 100,
        "name": "2013"
      },
      {
        "value": 200,
        "name": "2014"
      },
      {
        "value": 250,
        "name": "2015"
      }]
  }];
  
  ProductSalesBarChartDataSet:any[] = [
    {
      "name": "Germany",
      "series": [
        {
          "name": "2010",
          "value": 7300000
        },
        {
          "name": "2011",
          "value": 8940000
        }
      ]
    },
  
    {
      "name": "USA",
      "series": [
        {
          "name": "2010",
          "value": 7870000
        },
        {
          "name": "2011",
          "value": 8270000
        }
      ]
    },
  
    {
      "name": "France",
      "series": [
        {
          "name": "2010",
          "value": 5000002
        },
        {
          "name": "2011",
          "value": 5800000
        }
      ]
    }
  ];
  constructor(private DB: DbrepositoryService) {
    // this.DB.GetCurrentYearTerritorySalesReportData()
    // .subscribe(resp => {
    //   if (resp.length > 0) {
    //     for (let index = 0; index < resp.length; index++) {
    //       this.SalesTerritoryLlabels.push(resp[index].Name);
    //       this.SalesTerritorydata.push(resp[index].Sales);
    //     }
    //   }
    // },
    //   error => {
    //     console.log(error);
    //   });
  }

  // ngAfterViewInit() {
  //   this.Create_Doughnut_SalesTerritor_Chart();
  // } 
}




