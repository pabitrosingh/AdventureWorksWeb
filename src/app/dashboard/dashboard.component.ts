import { Component, AfterViewInit, OnInit } from '@angular/core';
import { DBrepositoryService } from '../services/dbrepository.service';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  calendarPlugins = [dayGridPlugin];
  PendingShipmentDataSet: any[] = [ { title: 'event 1', date: new Date()}];
  TerritoryPiGridChartDataSet: any[];
  ProductSalesBarChartDataSet: any[];
  TotalSalesForTheYear: string = 'NA';
  TotalCustomersCount: string = 'NA';
  IsBtn2014Clicked: boolean = false;
  IsBtn2013Clicked: boolean = false;
  IsBtn2012Clicked: boolean = false;
  IsBtn2011Clicked: boolean = false;
  Year: string = 'Year';
  Sales: string = 'Sales';
  InventoryGaugeChartDataSet: any = {
    needleValue: 70,
    bottomLabel: '70',
    options: {
      hasNeedle: true,
      needleColor: 'gray',
      needleUpdateSpeed: 1000,
      arcColors: ['rgb(23, 162, 184)', 'lightgray'],
      arcDelimiters: [70],
      rangeLabel: ['0', '100'],
      needleStartValue: 70,
    }
  };

  PurchaseGaugeChartDataSet: any = {
    needleValue: 30,
    options: {
      hasNeedle: true,
      needleUpdateSpeed: 1000,
      arcColors: ['rgb(23, 162, 184)', 'lightgray'],
      arcDelimiters: [30],
      rangeLabel: ['0', '100']
    }
  };

  CustomerLineChartDataset: any = [{
    'name': 'Total Customers',
    'series': [
      {
        'value': 20,
        'name': '2011'
      },
      {
        'value': 50,
        'name': '2012'
      },
      {
        'value': 100,
        'name': '2013'
      },
      {
        'value': 200,
        'name': '2014'
      },
      {
        'value': 250,
        'name': '2015'
      }]
  }];

  constructor(private DB: DBrepositoryService) { }

  ngOnInit() {

    // To Get Total Sales for the year
    this.DB.GetTotalSalesForTheYearFromServer()
      .subscribe(resp => {
        if (resp > 0) {
          this.TotalSalesForTheYear = resp.toString();
        }
      },
        error => {
          console.log(error);
        });


    // To Get Total Customers Count
    this.DB.GetTotalCustomerCountFromServer()
      .subscribe(resp => {
        if (resp > 0) {
          this.TotalCustomersCount = resp.toString();
        }
      },
        error => {
          console.log(error);
        });

    // To Get Territory Sales Report
    this.DB.GetTerritorySalesReportDataFromServer()
      .subscribe(resp => {
        if (resp.length > 0) {
          this.TerritoryPiGridChartDataSet = resp;
        }
      },
        error => {
          console.log(error);
        });

    // To Get Product Sales Report based on selected year
    this.DB.GetProductSalesReportDataFromServer('2014')
      .subscribe(resp => {
        if (resp.length > 0) {
          this.ProductSalesBarChartDataSet = resp;
        }
      },
        error => {
          console.log(error);
        });

  // trigger Btn2014 click by default
    const eml: HTMLElement = document.getElementById('IDBtn2014') as HTMLElement;
    eml.click();

  }

  ngAfterViewInit() {

  }

  // Product Sales Year Btn Click
  BtnProductSalesCLick(year: number) {
    switch (year) {
      case 2014:
        this.IsBtn2014Clicked = true;
        this.IsBtn2013Clicked = false;
        this.IsBtn2012Clicked = false;
        this.IsBtn2011Clicked = false;
        this.DB.GetProductSalesReportDataFromServer(year.toString())
          .subscribe(resp => {
            if (resp.length > 0) {
              this.ProductSalesBarChartDataSet = resp;
            }
          },
            error => {
              console.log(error);
            });
        break;
      case 2013:
        this.IsBtn2014Clicked = false;
        this.IsBtn2013Clicked = true;
        this.IsBtn2012Clicked = false;
        this.IsBtn2011Clicked = false;
        this.DB.GetProductSalesReportDataFromServer(year.toString())
          .subscribe(resp => {
            if (resp.length > 0) {
              this.ProductSalesBarChartDataSet = resp;
            }
          },
            error => {
              console.log(error);
            });
        break;
      case 2012:
        this.IsBtn2014Clicked = false;
        this.IsBtn2013Clicked = false;
        this.IsBtn2012Clicked = true;
        this.IsBtn2011Clicked = false;
        this.DB.GetProductSalesReportDataFromServer(year.toString())
          .subscribe(resp => {
            if (resp.length > 0) {
              this.ProductSalesBarChartDataSet = resp;
            }
          },
            error => {
              console.log(error);
            });
        break;
      case 2011:
        this.IsBtn2014Clicked = false;
        this.IsBtn2013Clicked = false;
        this.IsBtn2012Clicked = false;
        this.IsBtn2011Clicked = true;
        this.DB.GetProductSalesReportDataFromServer(year.toString())
          .subscribe(resp => {
            if (resp.length > 0) {
              this.ProductSalesBarChartDataSet = resp;
            }
          },
            error => {
              console.log(error);
            });
        break;
      default:
        break;
    }
  }
}




