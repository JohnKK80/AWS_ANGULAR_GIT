import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { TopTenGuard } from './auth-guards/top-ten.guard';
import { MaleEmployeeComponent } from './employee/male-employee/male-employee/male-employee.component';
import { FemaleEmployeeComponent } from './employee/female-employee/female-employee/female-employee.component';
import { FootballHomeComponent } from './football-home/football-home.component';
import { SquadComponent } from './football-home/squad/squad.component';


const routes: Routes = [
     {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
      {path: 'employee', component: EmployeeComponent, canActivate: [TopTenGuard], children:[
      {path: 'male', component: MaleEmployeeComponent},
      {path: 'female', component: FemaleEmployeeComponent}
    ]},
    {path: 'football', component:FootballHomeComponent, 
  //     loadChildren: "./football-home/football-module/football-module.module#FootballModuleModule"
  // },
    
    loadChildren: () => 
    import('./football-home/football-module/football-module.module').then(m => m.FootballModuleModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
