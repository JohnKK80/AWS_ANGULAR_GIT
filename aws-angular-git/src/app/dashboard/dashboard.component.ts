import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { Person } from '../models/person.model';
import { Subscription } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  getPeopleSub: Subscription;
  people: Person[];
 

  constructor(private dataService: DataService) { 
   
    console.log("DashboardComponent constructor");
  }

  ngOnInit() {

   
    this.dataService.getPeople();
    this.getPeopleSub = this.dataService.people.subscribe(resData => {
     this.people = resData;
   })
  }

  ngOnDestroy(){
  this.getPeopleSub.unsubscribe;    
  }


  personChosen(person: Person){
    this.dataService.addChosonOne(person);
  }

}
