


import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";

@Injectable()
export class AuthGaurds implements CanActivate{

  constructor(private router: Router){}

  canActivate(){
    if(localStorage.getItem('token') === null)
      this.router.navigateByUrl('login');
    return localStorage.getItem('token') !== null;
  }
}
