import { Component, OnInit } from '@angular/core';
import { CityService } from '../../../services/city.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { checkRePass, checkNum, checkLength, strongPass } from '../../../helpers/custome.validator';
import { SignupService } from '../../services/signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


export class SignupComponent implements OnInit {

  signupForm : FormGroup;
  checkForm = false;
  state="";
  
  
  allCity:any=[];
  allState : any =[];
  constructor(
    private _city : CityService,
    private _fb : FormBuilder,
    private _signup : SignupService,
    private _router : Router
  ) {

    

    this._city.getState().subscribe(result=>{
      this.allState = result;
    })

    this.signupForm = this._fb.group({
      name : ["", Validators.required],
      email : ["", [Validators.required, Validators.email]],
      password : ["", Validators.required],
      re_password : ["", Validators.required],
      address : ["", Validators.required],
      city : ["", Validators.required],
      state : ["", Validators.required],
      gender : ["", Validators.required],
      contact : [null, Validators.required],
    }, {
      validator : [checkRePass(), checkNum(), checkLength()] //strongPass()
    }
    )


   }

  ngOnInit(): void {
  }

  signup(){
    if(this.signupForm.invalid){
      this.checkForm = true;
      return;
    }
    this._signup.do_signup(this.signupForm.value).subscribe(result=>{
      // console.log(result);
      this._router.navigate(["/login"]);
    })
    // console.log(this.signupForm.value);
  }


  getCity(){
    // console.log(this.state);
    this._city.getCity(this.state).subscribe(result=>{
      console.log(result);
      this.allCity = result;
    })
  }

}
