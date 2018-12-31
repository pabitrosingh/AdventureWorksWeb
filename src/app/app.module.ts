import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';


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




@NgModule({
  declarations: [
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
    JobcandidateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [DbrepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
