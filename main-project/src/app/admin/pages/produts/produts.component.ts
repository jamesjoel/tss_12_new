import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


function checkNum(x:any){
  return function(myForm : FormGroup){
    let a = myForm.controls[x];
    
    if(a.errors && ! a.errors['numErr'])
    {
      return;
    }
    if(isNaN(a.value))
    {
      a.setErrors({ numErr : true });
    }
  }
}


function checkImgType(){
  return function(abc:FormGroup){
    let a = abc.controls['image'];
     // c:/fakepath/demo.js
    let arr = a.value.split(".");
    // ['c:/fakepath/demo, 'js']
    let ext = arr[arr.length-1];
    

    if(a.errors && !a.errors['typeErr'])
    {
      return;
    }

    if(ext !="jpg" && ext !="png" && ext !="jpeg" && ext != "bmp")
    {
      a.setErrors({ typeErr : true });
    }
    else{
      a.setErrors(null);
    }
  }
}



@Component({
  selector: 'app-produts',
  templateUrl: './produts.component.html',
  styleUrls: ['./produts.component.css']
})
export class ProdutsComponent implements OnInit {

  allCategory : any;
  id:any;
  product : FormGroup;
  checkForm = false;
  constructor(
    private _router : Router,
    private _cate : CategoryService,
    private _pro : ProductService,
    private _actRoute : ActivatedRoute,
    private _fb : FormBuilder
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
    this.product = this._fb.group({
      
        title : ["", Validators.required],
        price : [null, Validators.required],
        category :  ["", Validators.required],
        detail : ["", Validators.required],
        discount : [null, Validators.required],
        quantity : [null, Validators.required],
        image : ["", Validators.required]
      
    },{

      validator : [checkNum('price'), checkNum('quantity'), checkNum('discount'), checkImgType()]
    }
    )


   }

  ngOnInit(): void {
  }

  add(img:any){
    if(this.product.invalid){
      this.checkForm = true;
      return;
    }

    
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
        form.append("data", this.product);
        form.append("image", imgdata);
  
        //return;
        this._pro.addProduct(form).subscribe(result=>{
          // console.log(result);
          this._router.navigate(["/admin/products/list"]);
        })
      }
        
  }


  checkImgSize(img:any){
    let file = img.files[0];
    
    if(this.product.controls['image'].errors && ! this.product.controls['image'].errors['sizeErr'])
    {
      return;
    }
    if(file.size > (1024*1024*5))
    {
      this.product.controls['image'].setErrors({ sizeErr : true});
    }
    else{
      this.product.controls['image'].setErrors(null);
    }
}
}
