import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  allProduct : any;
  product:any;

  colNames : any = ["S.No.", "Title", "Price", "Category", "Update", "Delete"];
  propName = ["title", "price","category", "_id"];
  upDateUrl = "/admin/product/edit";
  constructor(
    private _pro : ProductService,
    private _router : Router
  ) {
      this._pro.getProduct().subscribe(result=>{
        this.allProduct = result;
      })
   }

  ngOnInit(): void {
  }

  delete(obj:any){
    this.product = obj;
  }

  confirm_delete(){
    this._pro.deleteProduct(this.product._id).subscribe(result=>{
      // console.log(result);
      let n = this.allProduct.indexOf(this.product);
      this.allProduct.splice(n, 1);
      
    })
  }
}
