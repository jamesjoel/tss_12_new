import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productbycategory',
  templateUrl: './productbycategory.component.html',
  styleUrls: ['./productbycategory.component.css']
})
export class ProductbycategoryComponent implements OnInit {

  cateName : any;
  allProduct : any;
  constructor(
    private _actRoute : ActivatedRoute,
    private _product : ProductService
  ) {

    // this.cateName = this._actRoute.snapshot.paramMap.get("name");
    // console.log(this.cateName);
    this._actRoute.params.subscribe(urlparam=>{
      // console.log(result);
      

        this.cateName = urlparam['name'];

        this._product.getProductByCategory(this.cateName).subscribe(result=>{
          // console.log(result);
          this.allProduct = result;
        })
        
    })


   }

  ngOnInit(): void {
  }

}
