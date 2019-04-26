import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { IDepartment } from '../viewmodel/department';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from '../viewmodel/employee';


@Injectable({
  providedIn: 'root'
})
export class DbrepositoryService {


  private readonly BASE_URL = environment.API_ENDPOINT;

  constructor(private http: HttpClient) { }

  public GetDepartmentsFromServer(): Observable<IDepartment[]> {
    return this.http.get<IDepartment[]>(this.BASE_URL + `Department/GetDepartmentDetails`);
  }

  public GetDepartmentFromServer(deptid: Number): Observable<IDepartment> {
    return this.http.get<IDepartment>(this.BASE_URL + `Department/GetDepartmentDetails/${deptid}`);
  }

  public GetEmployeeDetailsFromServer(empid: Number): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.BASE_URL + `Employee/GetEmployeeDetails/${empid}`);
  }

  public GetCurrentYearTerritorySalesReportDataFromServer(): Observable<{ Year: number, Name: string, Sales: number }[]> {
    return this.http.get<{ Year: number, Name: string, Sales: number }[]>(
      this.BASE_URL + `Sales/GetCurrentYearTerritorySalesReport`);
  }

  public GetQuaterlyProductSalesDataDataFromServer(): Observable<{ Year: number, Quater: number, Name: string, Sales: number }[]> {
    return this.http.get<{ Year: number, Quater: number, Name: string, Sales: number }[]>(
      this.BASE_URL + `Sales/GetCurrentYearQuaterlyProductSalesReport`);
  }

  GetAssemblyLineDataFromServer(): Observable<{ LocationID: number, AssemblyName: string ,
                                                CountWorkOrder: number , RoutingSequence: number }[]> {
    return this.http.get<{ LocationID: number, AssemblyName: string , CountWorkOrder: number , RoutingSequence: number }[]>(
      this.BASE_URL + `Production/GetAssemblyLineCount`);
  }

  GetWorkOrderDetailsDataFromServer(): Observable<{ name: string,  value: number }[]>  {
    return this.http.get<{ name: string,  value: number }[]>(
      this.BASE_URL + `Production/GetWorkOrderDetailsCount`);
  }

  GetStockInventoryDataFromServer(): Observable<{ name: string,  value: number }[]>  {
    return this.http.get<{ name: string,  value: number }[]>(
      this.BASE_URL + `Production/GetStockInventoryCount`);
  }
}
