import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({ 
  providedIn: 'root'
})
export class CityService {

  constructor(
    private _http : HttpClient
  ) { }

  getCity(x:any){
    return this._http.post<any>(environment.apiUrl+"/city", { statename : x });
  }
  getState(){
    return this._http.get<any>(environment.apiUrl+"/city/state");
    
  }
  getAllCity(skip:any, limit:any){
    return this._http.get<any>(environment.apiUrl+"/city/pagination/"+skip+"/"+limit);

  }
  getTotalCity(){
    return this._http.get<any>(environment.apiUrl+"/city/count");
  }
}
