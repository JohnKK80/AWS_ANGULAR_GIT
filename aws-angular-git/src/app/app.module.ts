import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { FormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';
import { FemaleEmployeeComponent } from './employee/female-employee/female-employee/female-employee.component';
import { MaleEmployeeComponent } from './employee/male-employee/male-employee/male-employee.component';
import { FilterPipePipe } from './football-home/pipes/filter-pipe.pipe';
import { FootballModuleModule } from './football-home/football-module/football-module.module';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    FemaleEmployeeComponent,
    MaleEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    FormsModule, 
    HttpClientModule,
    FootballModuleModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/tester'} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
