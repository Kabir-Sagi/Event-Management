import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {UserService} from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class ProEventsGuard implements CanActivate {

  constructor(private _userService:UserService,
              private _router:Router){
  }

  canActivate(): boolean {
    if(this._userService.isLoggedIn()){
      return true;
    }
    else{
      this._router.navigate(['/login']);
      return false;
    }
  }

}
