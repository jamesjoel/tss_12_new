import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private _http : HttpClient
  ) { }

  getUsers(){
    return this._http.get<any>(environment.apiUrl+"/user/list");
  }
  updateUser(id:any, obj:any){
    // return this._http.put<any>(environment.apiUrl+"/user/profile/"+id, obj);
    return this._http.put<any>(`${environment.apiUrl}/user/profile/${id}`, obj);
  }
}
