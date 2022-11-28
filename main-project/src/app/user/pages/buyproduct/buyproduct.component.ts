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
  product:any={
    img1 : "gallery3.jpg",
    img2 : "gallery1.jpg",
    img3 : "gallery2.jpg",
    img4 : "gallery2.png"

  };

  mainImg:any = this.product.img1;
  bigImg = false;
  




  constructor(
    private _actRoute : ActivatedRoute,
    private _product : ProductService
  ) {
    // this.id = this._actRoute.snapshot.paramMap.get("id");
    // // console.log(this.id);
    // this._product.getOneProduct(this.id).subscribe(result=>{
    //   this.product= result;
    //   console.log(result);
    // })

   }

  ngOnInit(): void {
  }

  changeMainImg(a:any){
    this.mainImg = a;
  }


  showBigImg(){
      this.bigImg = true;
    }
    hideBigImg(){
    this.bigImg = false;

  }
}
