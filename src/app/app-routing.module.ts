import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductionComponent } from './production/production.component';
import { SalesComponent } from './sales/sales.component';
import { HrComponent } from './hr/hr.component';
import { EmployeeComponent } from './employee/employee.component';
import { PersonalComponent } from './personal/personal.component';
import { ShiftsComponent } from './shifts/shifts.component';
import { JobcandidateComponent } from './jobcandidate/jobcandidate.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductionLineComponent } from './production-line/production-line.component';
import { ProductComponent } from './product/product.component';
import { VendorsComponent } from './vendors/vendors.component';
import { ShippingComponent } from './shipping/shipping.component';
import { SalesOrderComponent } from './sales-order/sales-order.component';
import { OffersComponent } from './offers/offers.component';
import { StoreComponent } from './store/store.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { InventoryComponent } from './inventory/inventory.component';
import { WorkOrderComponent } from './work-order/work-order.component';
import { StockComponent } from './stock/stock.component';
import { AssemblyLineComponent } from './assembly-line/assembly-line.component';

const routes: Routes = [
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
    component: ProductionComponent,
    children: [
      {
        path: 'productionline',
        component: ProductionLineComponent
      },
      {
        path: 'workorder',
        component: WorkOrderComponent
      },
      {
        path: 'inventory',
        component: InventoryComponent
      },
      {
        path: 'assemblyline',
        component: AssemblyLineComponent
      },
      // {
      //   path: 'assemblyline/:LocationID',
      //   component: AssemblyLineComponent
      // },
      { path: '', redirectTo: 'productionline', pathMatch: 'full' }
    ]
  },
  {
    path: 'sales',
    component: SalesComponent,
    children: [
      {
        path: 'product',
        component: ProductComponent
      },
      {
        path: 'salesorders',
        component: SalesOrderComponent
      },
      {
        path: 'offers',
        component: OffersComponent
      },
      {
        path: 'store',
        component: StoreComponent
      },
      { path: '', redirectTo: 'product', pathMatch: 'full' }
    ]
  },
  {
    path: 'purchase',
    component: PurchaseComponent,
    children: [
      {
        path: 'stock',
        component: StockComponent
      },
      {
        path: 'purchaseorder',
        component: PurchaseOrderComponent
      },
      {
        path: 'vendors',
        component: VendorsComponent
      },
      {
        path: 'shipping',
        component: ShippingComponent
      },
      { path: '', redirectTo: 'stock', pathMatch: 'full' }
    ]
  },
  {
    path: 'hr',
    component: HrComponent,
    children: [
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
      },
      { path: '', redirectTo: 'employee', pathMatch: 'full' }
    ]
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotfoundComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
