import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category.service';

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
  constructor(
    private _cate : CategoryService
  ) { }

  ngOnInit(): void {
  }

  add(){
    // console.log(this.category);
    this._cate.addCategory(this.category).subscribe(result=>{
      //console.log(result);
      if(result.success)
      {
        this.msg = "Category Saved Successfuly";
        this.category.name = "";
      }
    })
  }

  close(){
    this.msg = "";
    console.log(this.msg);
  }
}
