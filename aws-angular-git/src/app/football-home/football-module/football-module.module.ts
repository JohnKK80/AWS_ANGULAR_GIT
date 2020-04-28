import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PremiershipTeamsComponent } from '../premiership-teams/premiership-teams.component';
import { ClubComponent } from '../club/club.component';
import { FootballRoutingModule } from '../football-routing/football-routing.module';
import { FootballHomeComponent } from '../football-home.component';
import { SquadComponent } from '../squad/squad.component';
import { FilterPipePipe } from '../pipes/filter-pipe.pipe';



@NgModule({
  declarations: [
    FootballHomeComponent,
    PremiershipTeamsComponent,
    ClubComponent,
    SquadComponent,
    FilterPipePipe
  ],
  imports: [
    CommonModule,
    FootballRoutingModule
  ],
  exports:[
    FootballHomeComponent,
    PremiershipTeamsComponent,
    ClubComponent,
    SquadComponent
  ]
})
export class FootballModuleModule { }
