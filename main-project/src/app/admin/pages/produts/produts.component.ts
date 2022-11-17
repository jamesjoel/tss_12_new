import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { ConnectableObservable } from 'rxjs';

@Component({
  selector: 'app-produts',
  templateUrl: './produts.component.html',
  styleUrls: ['./produts.component.css']
})
export class ProdutsComponent implements OnInit {

  allCategory : any;
  id:any;
  product = {
    title : "",
    price : null,
    category :  "",
    detail : "",
    discount : null,
    quantity : null,
    image : ""
  }
  constructor(
    private _router : Router,
    private _cate : CategoryService,
    private _pro : ProductService,
    private _actRoute : ActivatedRoute
  ) {
    this._cate.getCategory().subscribe(result=>{
      this.allCategory = result;
    })

    this.id = this._actRoute.snapshot.paramMap.get("id");
    if(this.id){
      this._pro.getOneProduct(this.id).subscribe(result=>{
        // console.log(result);
        this.product = result;
      })
    }

   }

  ngOnInit(): void {
  }

  add(img:any){
    if(this.id){ // update code here
      this._pro.updateProduct(this.id, this.product).subscribe(result=>{
        // console.log(result);
        this._router.navigate(["/admin/products/list"]);
      })
    }else{ // add code here

      // console.log(this.product);
      // console.log(img.files[0]);
      let imgdata = img.files[0];
      let form = new FormData();
      form.append("data", JSON.stringify(this.product));
      form.append("image", imgdata);

      //return;
      this._pro.addProduct(form).subscribe(result=>{
        // console.log(result);
        this._router.navigate(["/admin/products/list"]);
      })
    }
  }

}
