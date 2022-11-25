import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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
    return this._http.get<any>(environment.apiUrl+"/user/profile", { headers : head })
  }

  updateUserInfo(obj:any){
    let head = new HttpHeaders().
      set('Authorization', JSON.stringify(localStorage.getItem('token'))
      );
    return this._http.put<any>(environment.apiUrl+"/user/update", obj, { headers : head })

  }

  checkPassword(obj:any){ // { curr, newpass }
    let head = new HttpHeaders().
      set('Authorization', JSON.stringify(localStorage.getItem('token'))
      );
    return this._http.post<any>(environment.apiUrl+"/user/update_pass", obj, { headers : head });
  }
}




/*
let obj = { name : "rohit" };
let x = JSON.stringify(obj);



let y = JSON.parse(x);

*/