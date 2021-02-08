import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserGuardService {
  token:string;
  constructor(private router:Router) {
    this.token =localStorage.getItem('token')
   }
   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
 
    this.token ? (this.router.navigate(['/']),false) : true

  }
}