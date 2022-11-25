import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private _http : HttpClient
  ) { }

  getProduct(){
    return this._http.get<any>(environment.apiUrl+"/product");
  }
  addProduct(obj:any){
    return this._http.post<any>(environment.apiUrl+"/product", obj);
  }
  deleteProduct(id:any){
    return this._http.delete<any>(environment.apiUrl+"/product/"+id);

  }
  getOneProduct(id:any){
    return this._http.get<any>(environment.apiUrl+"/product/"+id);

  }
  updateProduct(id:any, obj:any){
    return this._http.put<any>(environment.apiUrl+"/product/"+id, obj);

  }

  getLastProduct(){
    return this._http.get<any>(environment.apiUrl+"/product/lastproduct");
  }
}
