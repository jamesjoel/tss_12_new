import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServService {

  x = 100;
  para = "The Stepping Stone";
  demo(){
    console.log("hello");
  }
  
}
