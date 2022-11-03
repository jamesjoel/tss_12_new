import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  checkForm = false;
  errMsg = "";
  constructor(
    private _fb : FormBuilder,
    private _router : Router,
    private _login : LoginService
  ) {

    this.loginForm = this._fb.group({
      username : ["", Validators.required],
      password : ["", Validators.required]
    })

   }

  ngOnInit(): void {
  }

  login(){
    if(this.loginForm.invalid){
      this.checkForm = true;
      return;
    }
    this._login.do_login(this.loginForm.value).subscribe(result=>{
      // console.log(result);
      if(result.success == false)
      {
        if(result.type == 1)
        {
          this.errMsg = "This Username and Password incorrect";
        }
        if(result.type == 2)
        {
          this.errMsg = "This Password incorrect";

        }
      }
      else{
        localStorage.setItem(environment.tokenName, result.token);
        this._router.navigate(["/admin/dashboard"])
      }
    })
  }

}
