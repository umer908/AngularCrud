import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { AddeditDepartmentComponent } from './department/addedit-department/addedit-department.component';
import { ShowDepartmentComponent } from './department/show-department/show-department.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddeditEmployeeComponent } from './employee/addedit-employee/addedit-employee.component';
import { ShowEmployeeComponent } from './employee/show-employee/show-employee.component';
import { ApiserviceService } from './apiservice.service';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    AddeditDepartmentComponent,
    ShowDepartmentComponent,
    EmployeeComponent,
    AddeditEmployeeComponent,
    ShowEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
