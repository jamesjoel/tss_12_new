import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private _http : HttpClient
  ) { }

  addCategory(formData : any){
    return this._http.post<any>("http://localhost:3000/api/category/", formData);
  }
  getCategory(){
    return this._http.get<any>("http://localhost:3000/api/category/");
  }
  deleteCategory(id:any){
    return this._http.delete<any>("http://localhost:3000/api/category/"+id);
  }
}
