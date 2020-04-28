import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {BehaviorSubject, Observable } from 'rxjs/';
import { Person } from './models/person.model';

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit {

    _taxTypesObservable: Observable<string>;

    theChosenOne = new BehaviorSubject<Person>(null);
    people = new BehaviorSubject<Person[]>(null);
    retiringPeople = new BehaviorSubject<Person[]>(null);
    oldObservable: Observable<Person>;

      constructor(private http: HttpClient) {

        this._taxTypesObservable = new Observable((observer)=> {
          let taxTypes = ['PAYE', 'PRSI', 'NSC']
          for(var tax in taxTypes){
            observer.next(taxTypes[tax]);
          }
          observer.complete();
          observer.error("There was tax error");
        })

      }

      ngOnInit(){
      }

      getPeople(){

        let url: string = 'http://localhost:8080/person-app-ws/api/people';

              this.http.get(url).pipe(map((responseData)    => {
                let people: Person[] = [];
                for(const item in responseData){

                

                let person : Person = {
                  emp_no: responseData[item].emp_no,
                  birth_date: new Date(responseData[item].birth_date),
                  first_name: responseData[item].first_name,
                  last_name: responseData[item].last_name,
                  gender: responseData[item].gender,
                  hire_date: new Date(responseData[item].hire_date)
                }
                people.push(person);     
                }
                return people;
                })).subscribe(resData => {
                  this.people.next(resData);
                  this.retiringPeople.next(this.getRetiringPeople(resData));
                })

      }
          
      getRetiringPeople(people: Person[]){
        let retiringPeople: Person[] = [];
        for(let person in people){
          var retireeDate = new Date();
          retireeDate.setFullYear(retireeDate.getFullYear() - 59);

          var postRetireDate = new Date();
          postRetireDate.setFullYear(postRetireDate.getFullYear() - 60);

          if(people[person].birth_date <= retireeDate && people[person].birth_date >= postRetireDate){
            retiringPeople.push(people[person]);
          }
        }
        return retiringPeople;
      }

      getOldPeople(){
        let sortedPeople: Person[] = this.sortPeople();        

          this.oldObservable = new Observable((observer) => {
            let count: number = 0;
            setInterval(()=> {
              observer.next(sortedPeople[count]);
              count++;
              if(count == 5){
                observer.complete();
              }
            },3000)
          })
      }

      sortPeople(){
        let sortedPeople = this.people.getValue();
        sortedPeople.sort((a,b)=> (a.birth_date > b.birth_date)? 1 :
        (b.birth_date > a.birth_date)? -1 : 0)
        return sortedPeople.slice(0,5); 
        
      }

      addChosonOne(person: Person){
        if(person.emp_no > 10020){
          this.theChosenOne.error("Employee Number to big");
        }else{
          this.theChosenOne.next(person);
        }
      
      }

}
