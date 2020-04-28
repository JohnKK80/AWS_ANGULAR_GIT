import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TopTenGuard implements CanActivate {
 
  constructor(private dataService: DataService, private router: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.dataService.theChosenOne.pipe(take(1), map(person => {
      if(person == null  || !person || person.emp_no > 10010){
        return this.router.createUrlTree(['/']);
      }else{
        return true;
      }
    }))
  }
  
}
