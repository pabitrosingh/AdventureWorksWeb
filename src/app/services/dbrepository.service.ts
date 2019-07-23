import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { IDepartment } from '../viewmodel/IDepartment';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IEmployee } from '../viewmodel/IEmployee';
import { IAssemblyLine } from '../viewmodel/IAssemblyLine';
import { IProductDetails } from '../viewmodel/IProductDetails';


@Injectable({
  providedIn: 'root'
})
export class DBrepositoryService {


  private readonly BASE_URL = environment.API_ENDPOINT;

  constructor(private http: HttpClient) { }

  // *******Dashboard Services Start********//

  public GetTotalSalesForTheYearFromServer(): Observable<number> {
    return this.http.get<number>(this.BASE_URL + `Dashboard/GetTotalSalesForTheYear`);
  }

  public GetTotalCustomerCountFromServer(): Observable<number> {
    return this.http.get<number>(this.BASE_URL + `Dashboard/GetTotalCustomerCount`);
  }

  GetTerritorySalesReportDataFromServer(): Observable<{ name: string, value: number }[]> {
    return this.http.get<{ name: string, value: number }[]>(
      this.BASE_URL + `Dashboard/GetTerritorySalesReport`);
  }

  GetProductSalesReportDataFromServer(year: string): Observable<{ name: string, value: number }[]> {
    return this.http.get<{ name: string, value: number }[]>(
      this.BASE_URL + `Dashboard/GetProductSalesReport/${year}`);
  }

  // *******Dashboard Services End********//

  // *******Production Services Start********//

  GetAssemblyLineDataFromServer(): Observable<{
    LocationID: number, AssemblyName: string,
    CountWorkOrder: number, RoutingSequence: number}[]> {
    return this.http.get<{ LocationID: number, AssemblyName: string, CountWorkOrder: number, RoutingSequence: number }[]>(
      this.BASE_URL + `Production/GetAssemblyLineCount`);
  }

  GetWorkOrderDetailsDataFromServer(): Observable<{ name: string, value: number }[]> {
    return this.http.get<{ name: string, value: number }[]>(
      this.BASE_URL + `Production/GetWorkOrderDetailsCount`);
  }

  GetStockInventoryDataFromServer(): Observable<{ name: string, value: number }[]> {
    return this.http.get<{ name: string, value: number }[]>(
      this.BASE_URL + `Production/GetStockInventoryCount`);
  }

  GetSelectedAssemblyLineRecordsFromServer(LocationID: string): Observable<IAssemblyLine[]> {
    return this.http.get<IAssemblyLine[]>(
      this.BASE_URL + `Production/GetAssemblyLineRecords/${LocationID}`);
  }

  // *******Production Services End********//


  // *******Sales Services Start********//

  GetProductDetailsFromServer(DataToPost: object): Observable<IProductDetails[]> {
    if (DataToPost !== undefined) {
      return this.http.get<IProductDetails[]>(
        this.BASE_URL + `Sales/GetProductDetails`, {
          params: new HttpParams().set('PostedData', JSON.stringify(DataToPost)),
          headers: {'Content-Type': 'application/json'}
        });
    } else {
      return this.http.get<IProductDetails[]>(this.BASE_URL + `Sales/GetProductDetails`);
    }

  }


  // *******Sales Services End********//

  // public GetDepartmentsFromServer(): Observable<IDepartment[]> {
  //   return this.http.get<IDepartment[]>(this.BASE_URL + `Department/GetDepartmentDetails`);
  // }

  // public GetDepartmentFromServer(deptid: Number): Observable<IDepartment> {
  //   return this.http.get<IDepartment>(this.BASE_URL + `Department/GetDepartmentDetails/${deptid}`);
  // }

  public GetEmployeeDetailsFromServer(empid: Number): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.BASE_URL + `Employee/GetEmployeeDetails/${empid}`);
  }

  // public GetCurrentYearTerritorySalesReportDataFromServer(): Observable<{ Year: number, Name: string, Sales: number }[]> {
  //   return this.http.get<{ Year: number, Name: string, Sales: number }[]>(
  //     this.BASE_URL + `Sales/GetCurrentYearTerritorySalesReport`);
  // }

  // public GetQuaterlyProductSalesDataDataFromServer(): Observable<{ Year: number, Quater: number, Name: string, Sales: number }[]> {
  //   return this.http.get<{ Year: number, Quater: number, Name: string, Sales: number }[]>(
  //     this.BASE_URL + `Sales/GetCurrentYearQuaterlyProductSalesReport`);
  // }
}
