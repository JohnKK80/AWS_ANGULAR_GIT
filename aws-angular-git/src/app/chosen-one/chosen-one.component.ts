import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';
import { Person } from '../models/person.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chosen-one',
  templateUrl: './chosen-one.component.html',
  styleUrls: ['./chosen-one.component.css']
})
export class ChosenOneComponent implements OnInit {

  chosonOneSub: Subscription;
  theChosenOne: Person;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.chosonOneSub = this.dataService.theChosenOne.subscribe((resData: Person) => {
      this.theChosenOne = resData;
    })
  }

  viewEmployee(){
    let gender = this.theChosenOne.gender;
    let subRoute = "";
    if(gender.toUpperCase() == 'M'){
      subRoute = 'male';
    }else{
      subRoute = 'female'
    }
    this.router.navigate(['employee/' + subRoute])
  }

}
