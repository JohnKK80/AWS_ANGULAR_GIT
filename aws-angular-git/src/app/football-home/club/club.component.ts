import { Component, OnInit } from '@angular/core';
import { FootballServiceService } from '../football-service.service';
import { Club } from '../models/club.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.css']
})
export class ClubComponent implements OnInit {

  selectedClub: Club;

  constructor(private router: Router, private footballService: FootballServiceService) { }

  ngOnInit() {
    this.footballService._selectedTeam.subscribe((resData: Club) => {
      this.selectedClub = resData;
    })
  }

  viewSquad(){
    this.router.navigate(['/squad'])
  }

}
