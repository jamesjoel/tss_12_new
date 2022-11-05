import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  u:any;
  pass = "";
  re_pass = "";
  constructor(
    private _login : LoginService,
    private _router : Router
  ) { 
    this.u = localStorage.getItem("email");
  }

  ngOnInit(): void {
  }
  update_pass(){
    let obj = {email : this.u, password : this.pass};
    this._login.updatepass(obj).subscribe(result=>{
        console.log(result);
        this._router.navigate(["/login"]);
    })
  }

}
