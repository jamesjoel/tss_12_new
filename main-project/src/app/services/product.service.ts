import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private _http : HttpClient
  ) { }

  getProduct(){
    return this._http.get<any>("http://localhost:3000/api/product");
  }
  addProduct(obj:any){
    return this._http.post<any>("http://localhost:3000/api/product", obj);
  }
  deleteProduct(id:any){
    return this._http.delete<any>("http://localhost:3000/api/product/"+id);

  }
  getOneProduct(id:any){
    return this._http.get<any>("http://localhost:3000/api/product/"+id);

  }
  updateProduct(id:any, obj:any){
    return this._http.put<any>("http://localhost:3000/api/product/"+id, obj);

  }
}
