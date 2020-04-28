import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FootballHomeComponent } from '../football-home.component';
import { PremiershipTeamsComponent } from '../premiership-teams/premiership-teams.component';
import { ClubComponent } from '../club/club.component';
import { SquadComponent } from '../squad/squad.component';

  const routes = [
      { path: '', component: FootballHomeComponent, children: [
        {path: '', component: PremiershipTeamsComponent},
        {path: '', component: ClubComponent}
        ] 
      },
      {path: 'squad', component: SquadComponent}
  ]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class FootballRoutingModule { }
