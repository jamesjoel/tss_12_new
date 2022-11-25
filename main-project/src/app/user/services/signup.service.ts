import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(
    private _http : HttpClient
  ) { }

  do_signup(obj:any){
    return this._http.post<any>(environment.apiUrl+"/user/signup", obj);
  }
}
