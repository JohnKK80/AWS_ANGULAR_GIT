import { Component, OnInit } from '@angular/core';
import { FootballServiceService } from '../football-service.service';
import { Footballer } from '../models/footballer.module';
import { Club } from '../models/club.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-squad',
  templateUrl: './squad.component.html',
  styleUrls: ['./squad.component.css']
})
export class SquadComponent implements OnInit {

  squad: Footballer[] = [];

  constructor(private router: Router, private footballService: FootballServiceService) { }

  ngOnInit() {
    this.footballService._selectedTeam.subscribe((resData: Club) =>{
     
      if(!resData || resData == null){
        this.router.navigate(['/football'])
      }else{
        this.squad = resData.squad;
      }
    })
  }

}
