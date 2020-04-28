import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { pipe, Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FootballServiceService {

  constructor(private http: HttpClient) { }
  _premiershipTeams = new BehaviorSubject<any>(null);
  _selectedTeam = new BehaviorSubject<any>(null);

getPremiershipTeams(){
  let url: string = 'https://api.football-data.org/v2/competitions/2021/teams';

  return this.http.get(url, {
    headers: new HttpHeaders({
      'X-Auth-Token' : '06f151360c5f46ffa459926aeb391e42'
    })
  }).pipe(map(resData => {
    this._premiershipTeams.next(resData)
    return resData;
  }))
}

getTeam(teamId: number){
  let url: string = 'https://api.football-data.org/v2/teams/' + teamId;
  this.http.get(url,{
    headers: new HttpHeaders({
      'x-Auth-Token' : '06f151360c5f46ffa459926aeb391e42'
    })
  }).subscribe(resData => {
    this._selectedTeam.next(resData);
    //this._selectedTeam.error(console.log("service error occurred"));
  })
  
}

}
