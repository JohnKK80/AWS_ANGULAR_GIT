import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { Person } from '../models/person.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { MaleEmployeeComponent } from './male-employee/male-employee/male-employee.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit, OnDestroy {

  person: Person;
  taxAccounts: string[] = [];
  taxAccountsSub: Subscription;
  errorText: string;
  @ViewChild(MaleEmployeeComponent, {static: true}) maleChild: MaleEmployeeComponent;

  asyncText = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      let text = 'My delayed text';
      if(text == 'My delayed text'){
        resolve("My delayed text");
      }else{
        reject(this.errorText = "I've rejected this");
      } 
    },2000);
  })

  testText = new Promise((resolve, reject) => setTimeout(() => {
   resolve("now");
  }, 3000));

  constructor(private dataService: DataService, private router: Router) { 
    if(!dataService.theChosenOne){
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.dataService.theChosenOne.subscribe((resData: Person) => {
      this.person = resData
    })
    console.log(this.maleChild);
  }

  getTaxAccountReferences(){
    this.taxAccountsSub = this.dataService._taxTypesObservable.subscribe((resData: string) => {
      this.taxAccounts.push(this.person.emp_no + ":" + resData);
    })
  }

  testChild(){
    console.log(this.maleChild.footballTeam);
  }

  ngOnDestroy(){
    this.taxAccountsSub.unsubscribe;
  }
}
