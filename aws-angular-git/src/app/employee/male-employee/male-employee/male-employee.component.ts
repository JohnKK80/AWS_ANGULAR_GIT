import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-male-employee',
  templateUrl: './male-employee.component.html',
  styleUrls: ['./male-employee.component.css']
})
export class MaleEmployeeComponent implements OnInit {

  constructor() { }

  footballTeam: string;

  ngOnInit() {
  }

  addFootballTeam(team:string){
    this.footballTeam = team;
  }
}
