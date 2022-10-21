import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allProduct:any;
  constructor(
    private _pro : ProductService
  ) {
      this._pro.getProduct().subscribe(result=>{
        this.allProduct = result;
      })
   }

  ngOnInit(): void {
  }

}
