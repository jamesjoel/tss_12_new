import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(
    private _http : HttpClient
  ) { }

  getTotalCity(){
    return this._http.get<any>("http://localhost:3000/api/city/count");
  }
  getCityPerPages(no:any, rec:any){
    return this._http.get<any>("http://localhost:3000/api/city/pages/"+no+"/"+rec)
    //                       http://localhost:3000/api/city/pages/1/100 
  }
}
