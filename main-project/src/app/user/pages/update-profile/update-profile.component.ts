import { Component, OnInit } from '@angular/core';
import { checkNum, checkLength  } from '../../../helpers/custome.validator';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CityService } from 'src/app/services/city.service';
import { ProfileService } from '../../services/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  updateForm : FormGroup;
  checkForm = false;
  allCity : any = [];
  allState : any = [];
  state : any;
  newState : any;
  

  tempResult  : any;
  
  
  getCity1(){
    // console.log(this.state);
    this._city.getCity(this.newState).subscribe(result=>{
      
      this.allCity = result;
      this.updateForm.setValue(this.tempResult);
     
    })
  }

  getCity(){
    // console.log(this.state);
    this._city.getCity(this.state).subscribe(result=>{
      console.log(result);
      this.allCity = result;
    })
  }

  constructor(
    private _fb : FormBuilder,
    private _city : CityService,
    private _profile : ProfileService,
    private _router : Router
  ) {

    


    this._city.getState().subscribe(result=>{
      this.allState = result;
     
    })

    this._profile.getUserInfo().subscribe(result=>{
      delete result.password;
      delete result.otp;
      delete result.status;
      delete result._id;
      delete result.__v;
      this.newState = result.state;

      // console.log(result);
      this.getCity1();
      this.tempResult = result;
      
      // this.updateForm.setValue(result);
      


    })
    // this._city.getCity().subscribe(result=>{
    //   this.allCity = result;
    // })



    this.updateForm = this._fb.group({
      name : ["", Validators.required],
      email : ["", [Validators.required, Validators.email]],
      address : ["", Validators.required],
      state : ["", Validators.required],
      city : ["", Validators.required],
      gender : ["", Validators.required],
      contact : ["", Validators.required]
    }, {
      validator : [checkNum(), checkLength()]
    })
   }

  ngOnInit(): void {
  }

  update(){
    if(this.updateForm.invalid){
      this.checkForm = true;
      return;
    }
    //console.log(this.updateForm.value);
    this._profile.updateUserInfo(this.updateForm.value).subscribe(result=>{
      console.log(result);
      this._router.navigate(["/my-profile"]);
    })

  }
  
}
