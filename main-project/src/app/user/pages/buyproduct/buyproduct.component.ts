import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-buyproduct',
  templateUrl: './buyproduct.component.html',
  styleUrls: ['./buyproduct.component.css']
})
export class BuyproductComponent implements OnInit {

  id:any;
  product:any;
  constructor(
    private _actRoute : ActivatedRoute,
    private _product : ProductService
  ) {
    this.id = this._actRoute.snapshot.paramMap.get("id");
    // console.log(this.id);
    this._product.getOneProduct(this.id).subscribe(result=>{
      this.product= result;
      console.log(result);
    })

   }

  ngOnInit(): void {
  }

}
