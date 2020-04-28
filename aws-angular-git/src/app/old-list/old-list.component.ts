import { Component, OnInit } from '@angular/core';
import { Person } from '../models/person.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-old-list',
  templateUrl: './old-list.component.html',
  styleUrls: ['./old-list.component.css']
})
export class OldListComponent implements OnInit {

  oldPeople: Person[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
  
  }

  getOldPeople(){
    this.dataService.getOldPeople();
    this.dataService.oldObservable.subscribe(resData => {
      this.oldPeople.push(resData);
    })
  }

  

}
