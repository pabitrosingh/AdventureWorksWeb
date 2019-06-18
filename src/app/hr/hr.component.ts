import { Component, OnInit } from '@angular/core';
import { DBrepositoryService } from '../services/dbrepository.service';
import { IDepartment } from '../viewmodel/department';

@Component({
  selector: 'app-hr',
  templateUrl: './hr.component.html',
  styleUrls: ['./hr.component.css']
})
export class HrComponent implements OnInit {

  constructor(private DB: DBrepositoryService) { }

  ngOnInit() {

  }
  public onBtnGteDepartmentClick() {
    // let DeptList: IDepartment[];
    // this.DB.GetDepartmentsFromServer()
    //        .subscribe(resp => {
    //           if (resp.length > 0) {
    //            DeptList = resp;
    //            console.log(DeptList);
    //           }
    //         },
    //           error => {
    //             console.log(error);
    //           });
  }
}
