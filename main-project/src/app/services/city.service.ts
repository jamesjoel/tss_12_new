import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(
    private _http : HttpClient
  ) { }

  getCity(){
    return this._http.get<any>("http://localhost:3000/api/city");
  }
  getState(){
    return this._http.get<any>("http://localhost:3000/api/city/state");

  }
}
