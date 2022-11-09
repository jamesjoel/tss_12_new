import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  category={
    name : ""
  };

  msg:any;
  id:any;
  constructor(
    private _cate : CategoryService,
    private _actRoute : ActivatedRoute,
    private _router : Router
  ) {

    this.id = this._actRoute.snapshot.paramMap.get('id');
    if(this.id){
      this._cate.getOneCategory(this.id).subscribe(result=>{
        // console.log(result);
        this.category.name = result.name;
      })
    }
    

   }

  ngOnInit(): void {
  }

  add(){
    // console.log(this.category);
    if(this.id){
      // update code here
      this._cate.updateCategory(this.id, this.category).subscribe(result=>{
        // console.log(result);
        this._router.navigate(["/admin/category/list"]);
      })
    }else{

      this._cate.addCategory(this.category).subscribe(result=>{
        //console.log(result);
        if(result.success)
        {
          this.msg = "Category Saved Successfuly";
          this.category.name = "";
          this._router.navigate(["/admin/category/list"]);
        }
      })
    }
  }

  close(){
    this.msg = "";
    console.log(this.msg);
  }
}
