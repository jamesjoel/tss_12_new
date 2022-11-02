import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private _http : HttpClient
  ) { }

  getUsers(){
    return this._http.get<any>("http://localhost:3000/api/user/list");
  }
}
