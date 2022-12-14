import { Injectable } from '@angular/core';
import {  CanActivate } from '@angular/router';
import { LoginService } from '../user/services/login.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AntiAuthGuard implements CanActivate {
  constructor(
    private _login : LoginService,
    private _router : Router
  ){

  }
  canActivate() {
    if(this._login.isLoggedIn()){
      this._router.navigate(["/my-profile"]);
      return false;
    }else{
      return true;
    }
  }
  
}
