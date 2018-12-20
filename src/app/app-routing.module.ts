import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductionComponent } from './production/production.component';
import { SalesComponent } from './sales/sales.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { HrComponent } from './hr/hr.component';

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
    component: HrComponent
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
