import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { RetirementsComponent } from '../retirements/retirements.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { OldListComponent } from '../old-list/old-list.component';
import { ChosenOneComponent } from '../chosen-one/chosen-one.component';




@NgModule({
  declarations: [
    DashboardComponent,
    RetirementsComponent,
    OldListComponent,
    ChosenOneComponent
  ],
  imports: [
    CommonModule,
    RouterModule, 
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
