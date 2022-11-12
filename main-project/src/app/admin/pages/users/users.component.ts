import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users : any = [];
  msg="";
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


  change_status(obj:any){
    console.log(obj);
    obj.status = ! obj.status;
    let id = obj._id;
    this._users.updateUser(id, obj).subscribe(result=>{
      console.log(result);
      this.msg = "Status Change Successfuly";
      
    })
  }
  close(){
    this.msg = '';
  }
}
