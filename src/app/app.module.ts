import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule  } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LeftsideComponent } from './shared/leftside/leftside.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductionComponent } from './production/production.component';
import { SalesComponent } from './sales/sales.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { HrComponent } from './hr/hr.component';
import { DbrepositoryService } from './services/dbrepository.service';
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
import { InventoryComponent } from './inventory/inventory.component';
import { WorkOrderComponent } from './work-order/work-order.component';
import { StockComponent } from './stock/stock.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AssemblyLineComponent } from './assembly-line/assembly-line.component';
import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';

@NgModule({
  declarations: [
    jqxGridComponent,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LeftsideComponent,
    DashboardComponent,
    ProfileComponent,
    ProductionComponent,
    SalesComponent,
    PurchaseComponent,
    HrComponent,
    EmployeeComponent,
    PersonalComponent,
    ShiftsComponent,
    JobcandidateComponent,
    NotfoundComponent,
    ProductionLineComponent,
    ProductComponent,
    VendorsComponent,
    ShippingComponent,
    SalesOrderComponent,
    OffersComponent,
    StoreComponent,
    PurchaseOrderComponent,
    InventoryComponent,
    WorkOrderComponent,
    StockComponent,
    AssemblyLineComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule ,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    NgxChartsModule
  ],
  providers: [DbrepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
