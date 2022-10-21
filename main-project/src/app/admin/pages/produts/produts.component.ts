import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-produts',
  templateUrl: './produts.component.html',
  styleUrls: ['./produts.component.css']
})
export class ProdutsComponent implements OnInit {

  allCategory : any;
  product = {
    title : "",
    price : null,
    category :  "",
    detail : "",
    discount : null,
    quantity : null
  }
  constructor(
    private _router : Router,
    private _cate : CategoryService,
    private _pro : ProductService
  ) {
    this._cate.getCategory().subscribe(result=>{
      this.allCategory = result;
    })
   }

  ngOnInit(): void {
  }

  add(){
    this._pro.addProduct(this.product).subscribe(result=>{
      // console.log(result);
      this._router.navigate(["/admin/products/list"]);
    })
  }

}
