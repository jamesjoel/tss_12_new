import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(
    private _http : HttpClient
  ) { }

  do_signup(obj:any){
    return this._http.post<any>("http://localhost:3000/api/user/signup", obj);
  }
}
