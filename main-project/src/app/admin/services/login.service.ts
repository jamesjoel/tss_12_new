import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private _http : HttpClient,
    private _router : Router
  ) { }

  do_login(obj:any){
    return this._http.post<any>(environment.apiUrl+"/admin/login", obj);
  }

  isLoggedIn(){
    if(localStorage.getItem(environment.tokenName)){
      return true;
    }
    else{
      return false
    }
  }

  logout(){
    localStorage.removeItem(environment.tokenName);
    this._router.navigate(["/"]);
  }
}
