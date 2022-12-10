import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  {

  fname:any = "james";
  age = 25;
  // a = "<h1>"+this.fname+"</h1><h2>"+this.age+"</h2>";
  a = `<h1>${this.fname}</h1><h2>${this.age}</h2>`;
  
  constructor() { }

  demo(x:any){
    console.log(x.innerHTML);
  }

  

}
