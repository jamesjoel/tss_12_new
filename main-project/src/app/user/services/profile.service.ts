import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private _http : HttpClient
  ) { }

  getUserInfo(){
    
    let head = new HttpHeaders().
      set('Authorization', JSON.stringify(localStorage.getItem('token'))
      );
    return this._http.get<any>("http://localhost:3000/api/user/profile", { headers : head })
  }

  updateUserInfo(obj:any){
    let head = new HttpHeaders().
      set('Authorization', JSON.stringify(localStorage.getItem('token'))
      );
    return this._http.put<any>("http://localhost:3000/api/user/update", obj, { headers : head })

  }
}




/*
let obj = { name : "rohit" };
let x = JSON.stringify(obj);



let y = JSON.parse(x);

*/