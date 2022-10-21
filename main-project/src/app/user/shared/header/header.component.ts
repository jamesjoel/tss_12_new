import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  allCategory : any;
  constructor(
    private _cate : CategoryService
  ) {
    this._cate.getCategory().subscribe(result=>{
      this.allCategory = result;
    })
   }

  ngOnInit(): void {
  }

}
