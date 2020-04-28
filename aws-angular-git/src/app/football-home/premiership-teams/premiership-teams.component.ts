import { Component, OnInit, OnDestroy } from '@angular/core';
import { FootballServiceService } from '../football-service.service';
import { Subscription } from 'rxjs';
import { createReadStream } from 'fs';
import { Club } from '../models/club.model';

@Component({
  selector: 'app-premiership-teams',
  templateUrl: './premiership-teams.component.html',
  styleUrls: ['./premiership-teams.component.css']
})
export class PremiershipTeamsComponent implements OnInit, OnDestroy {

  premiershipTeams: Club[] = [];
  subPremiershipTeams: Subscription;
  seasonStart: string;
  seasonEnd: string;

  constructor(private footballService: FootballServiceService) { }

  ngOnInit() {
    this.subPremiershipTeams = this.footballService.getPremiershipTeams().subscribe((resData: any) => {
      for(var team in resData.teams){
        let premTeam: Club = this.createTeam(resData.teams[team]);
        this.premiershipTeams.push(premTeam);
      }
      this.viewTeam(this.premiershipTeams[0].id);
    })
    
  }

  createTeam(team: any){
    var premTeam = new Club(team.id, team.name, team.shortName, team.tla, team.crestUrl, team.address, team.phone,
        team.website, team.email, team.founded, team.clubColors, team.venue)
    return premTeam;
  }

  viewTeam(teamId: number){
    this.footballService.getTeam(teamId)
  }

  ngOnDestroy(){
    this.subPremiershipTeams.unsubscribe;
  }
}
