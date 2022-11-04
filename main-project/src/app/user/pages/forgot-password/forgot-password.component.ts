import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  forgotForm : FormGroup;
  checkForm = false;
  errMsg = "";
  constructor(
    private _fb : FormBuilder,
    private _router : Router,
    private _login : LoginService

  ) {
    this.forgotForm = this._fb.group({
      email : ["", [Validators.required, Validators.email]]
    })
   }

  ngOnInit(): void {
  }

  submit(){
    if(this.forgotForm.invalid){
      this.checkForm = true;
      return;
    }

    this._login.checkEmail(this.forgotForm.value).subscribe(result=>{
      // console.log(result);
      if(result.success == false){
        this.errMsg = "This Username/Email is not registred !";
      }else{
        this._router.navigate(["/otp"]);
      }
    })
  }

}
