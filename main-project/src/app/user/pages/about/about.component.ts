import { Component, OnInit } from '@angular/core';
import { MyServService } from '../../services/my-serv.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  x:any;
  constructor(
      public a : MyServService,
      private _pro : ProductService
      ) {

        this._pro.getLastProduct().subscribe(result=>{
          this.x = result;
          // console.log(this.x);
        })

       }

  ngOnInit(): void {
  }

}
