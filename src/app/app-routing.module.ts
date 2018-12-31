import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductionComponent } from './production/production.component';
import { SalesComponent } from './sales/sales.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { HrComponent } from './hr/hr.component';
import { EmployeeComponent } from './employee/employee.component';
import { PersonalComponent } from './personal/personal.component';
import { ShiftsComponent } from './shifts/shifts.component';
import { JobcandidateComponent } from './jobcandidate/jobcandidate.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
   {
    path: 'profile',
    component: ProfileComponent
   },
   {
    path: 'production',
    component: ProductionComponent
   },
   {
    path: 'sales',
    component: SalesComponent
   },
   {
    path: 'purchase',
    component: PurchaseComponent
   },
   {
    path: 'hr',
    component: HrComponent,
    children: [
      { path: '', redirectTo: 'employee', pathMatch: 'full' },
      {
        path: 'employee',
        component: EmployeeComponent
       },
       {
        path: 'personal',
        component: PersonalComponent
       },
       {
        path: 'shifts',
        component: ShiftsComponent
       },
       {
        path: 'jobcandiate',
        component: JobcandidateComponent
       }
    ]
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
