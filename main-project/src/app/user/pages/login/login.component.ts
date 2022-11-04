import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

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
    private _login : LoginService,
    private _router : Router
  ) {
    this.loginForm = this._fb.group({
      email : ["", [Validators.required, Validators.email]],
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
    this._login.doLogin(this.loginForm.value).subscribe(result=>{
      if(result.success == false)
      {

        if(result.type == 1)
        {
          this.errMsg = "This Email id is not registred !";
        }
        if(result.type == 2)
        {
          
          this.errMsg = "This Password is Incorrect !";
        }
      }
      else{
        //console.log(result);
        localStorage.setItem("token", result.token);
        localStorage.setItem("name", result.name);
        this._router.navigate(["/"]);
      }
    })

  }

}
