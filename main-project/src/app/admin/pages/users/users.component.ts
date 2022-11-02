import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users : any = [];
  constructor(
    private _users : UsersService
  ) {
    this._users.getUsers().subscribe(result=>{
      // console.log(result);
      this.users = result;
    })
   }

  ngOnInit(): void {
  }

}
