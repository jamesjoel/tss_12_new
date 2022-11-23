import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  a = "rohit";
  fee = 5000;
  x = new Date();
  data = [
    {
      name : "rohit",
      age : 25
    },
    {
      name : "amar",
      age : 23
    }
  ]

  allPro : any = [];
  constructor(
    private _http : HttpClient
  ) {

      this._http.get<any>("https://fakestoreapi.com/products").subscribe(result=>{
        
        this.allPro = result;
      })

   }

  ngOnInit(): void {
  }

}
