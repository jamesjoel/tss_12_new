import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  allCategory:any;
  category:any;
  constructor(
    private _cate : CategoryService
  ) {
    this._cate.getCategory().subscribe(result=>{
      this.allCategory = result;
    })
   }

  ngOnInit(): void {
  }

  delete(obj:any){
    console.log(obj);
    this.category = obj;
  }

  confirm_delete(){
    this._cate.deleteCategory(this.category._id).subscribe(result=>{
      if(result.success == true){
        let n = this.allCategory.indexOf(this.category);
        this.allCategory.splice(n, 1);
        
      }
    })
  }

  demo1(){
    console.log("****************");
  }


  demo2(x:any){
    x.click();
  }

}


/*

let arr = ['red', 'green, 'blue', 'yellow', 'pink'];
let n = arr.indexOf('yellow');

arr.splice(2, 2);








*/