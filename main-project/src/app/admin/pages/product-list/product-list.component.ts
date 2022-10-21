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

}
