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


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  Doughnut_SalesTerritory: any = [];
  SalesTerritoryLlabels: Array<string> = [];
  SalesTerritorydata: Array<number> = [];
  @ViewChild('IDDoughnut_SalesTerritoryChartCanvasref') IDDoughnut_SalesTerritoryChartCanvasref: ElementRef;
  BarChartDataSet: Array<any>  = [];
  BarChartColorScheme: object;
  PiGridChartDataSet: any[] = [
    {
      'name': 'Germany',
      'value': 8940000
    },
    {
      'name': 'USA',
      'value': 5000000
    }
  ];
  constructor(private DB: DbrepositoryService) {
    this.Create_Bar_Chart();

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

  private Create_Doughnut_SalesTerritor_Chart(): void {
    this.Doughnut_SalesTerritory = new Chart(
      this.IDDoughnut_SalesTerritoryChartCanvasref.nativeElement.getContext('2d'), {
      type: 'doughnut',
      data: {
        datasets: [{
          data: this.SalesTerritorydata,
          backgroundColor: [
            'green',
            'yellow',
            'aqua',
            'blue',
            'Chocolate',
            'orange',
            'olive',
            'teal',
            'lime',
            'brown'
          ]
        }],
        labels: this.SalesTerritoryLlabels
      },
      options: {
        responsive: true,
        legend: {
          position: 'left',
        },
        title: {
          display: false,
        },
        animation: {
          animateScale: true,
          animateRotate: true
        }
      }
    });
  }

  private Create_Bar_Chart(): void {

    const BarchartSeries = [];
    const BarChartName: Array<string> = [];
    let BarChartDataset: {Year: number , Quater: number , Name: string , Sales: number}[] = [];
    this.DB.GetQuaterlyProductSalesDataData().subscribe(resp => {
      if (resp.length > 0) {
        BarChartDataset = resp;
      }
      for (let index = 0; index < BarChartDataset.length; index++) {
        const element = BarChartDataset[index].Name;
        BarChartName.push(element);
      }
      console.log(BarChartName);
    },
    error => {
      console.log(error);
    });

    // this.BarChartDataSet = [
    //   {
    //     'name': 'Germany',
    //     'value': 8940000
    //   },
    //   {
    //     'name': 'USA',
    //     'value': 5000000
    //   },
    //   {
    //     'name': 'France',
    //     'value': 7200000
    //   }
    // ];

    this.BarChartDataSet = [
      {
        'name': 'Q1',
        'series': [
          {
            'name': 'Bike',
            'value': 7300000
          },
          {
            'name': 'Accessories',
            'value': 8940000
          },
          {
            'name': 'Components',
            'value': 8940000
          },
          {
            'name': 'Clothing',
            'value': 8940000
          }
        ]
      },

      {
        'name': 'Q2',
        'series': [
          {
            'name': '2010',
            'value': 7870000
          },
          {
            'name': '2011',
            'value': 8270000
          }
        ]
      }
    ];
    this.BarChartColorScheme =  {
     // domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
     domain: []
    };
  }
}




