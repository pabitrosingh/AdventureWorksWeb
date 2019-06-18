import { Component, OnInit } from '@angular/core';
import { DBrepositoryService } from '../services/dbrepository.service';
import { IEmployee } from '../viewmodel/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

   EmpList: Array<IEmployee> = [];
   IDTxtEmployeeIDSearch: Number;

  constructor(private DB: DBrepositoryService) { }

  OnBtnSearchClick(empid: Number) {
    this.DB.GetEmployeeDetailsFromServer(empid)
      .subscribe(resp => {
        if (resp.length > 0) {
          this.EmpList = resp;
        }
      },
        error => {
          console.log(error);
        });
  }
}
