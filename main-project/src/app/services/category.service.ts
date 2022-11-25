import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private _http : HttpClient
  ) { }

  addCategory(formData : any){
    return this._http.post<any>(environment.apiUrl+"/category/", formData);
  }
  getCategory(){
    return this._http.get<any>(environment.apiUrl+"/category/");
  }
  deleteCategory(id:any){
    return this._http.delete<any>(environment.apiUrl+"/category/"+id);
  }
  getOneCategory(id:any){
    
    return this._http.get<any>(environment.apiUrl+"/category/"+id);
  }
  updateCategory(id:any, obj:any){
    
    return this._http.put<any>(environment.apiUrl+"/category/"+id, obj);
  }
}
