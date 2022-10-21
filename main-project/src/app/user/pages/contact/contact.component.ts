import { Component, OnInit } from '@angular/core';
import { MyServService } from '../../services/my-serv.service';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  users:any=[];
  
  constructor(
    private my : MyServService,
    private http : HttpClient
  ) { }

  ngOnInit(): void {
  }

  demo1(){
    
    this.http.get<any>("https://jsonplaceholder.typicode.com/users").subscribe(data=>{
      
      this.users = data;
    });
  }

}
