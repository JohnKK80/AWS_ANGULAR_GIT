import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { of, Observable } from 'rxjs';
import { Person } from './models/person.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('DataService', () => {
  let dataService: DataService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [HttpClientModule],  
    providers: [DataService, HttpClient]
  })
  
    http = TestBed.get(HttpClient);
    dataService = TestBed.get(DataService);
    
  });


  it('should be created', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });

  describe('get all people', () => {
    it('should return collection of users', ()=> {
      const getPeopleResponse : Person[] = 
      [
        {
          emp_no: 10001,
          birth_date: new Date(-515376000000),
          first_name: "Georgi",
           last_name : "Facello",
           gender : "M",
           hire_date : new Date(520128000000)
        },
        {
           emp_no : 10002,
           birth_date : new Date(-176169600000),
           first_name : "Bezalel",
           last_name : "Simmel",
           gender : "F",
           hire_date : new Date(501379200000)
        },
        {
           emp_no : 10003,
           birth_date : new Date(-318124800000),
           first_name : "Parto",
           last_name : "Bamford",
           gender : "M",
           hire_date : new Date(525571200000)
        }
      ];

      let response;
      spyOn(dataService, 'getPeoples').and.returnValue(of(getPeopleResponse));

      dataService.getPeoples().subscribe(res => {
        response = res;
      });

      expect(response).toEqual(getPeopleResponse);
    })
  }) 



});
