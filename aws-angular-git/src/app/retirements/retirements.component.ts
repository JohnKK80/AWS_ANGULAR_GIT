import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DataService } from '../data.service';
import { Person } from '../models/person.model';

@Component({
  selector: 'app-retirements',
  templateUrl: './retirements.component.html',
  styleUrls: ['./retirements.component.css']
})
export class RetirementsComponent implements OnInit {

 //@Input('retiringPeople') retiringPeople: Person[];
  retiringPeople: Person[];
  getRetiringPeopleSub: Subscription;

  constructor(private dataService: DataService) { }

  ngOnInit() {
   
    this.getRetiringPeopleSub = this.dataService.retiringPeople.subscribe(resData => {
    this.retiringPeople = resData;
    })

  }

  
}
