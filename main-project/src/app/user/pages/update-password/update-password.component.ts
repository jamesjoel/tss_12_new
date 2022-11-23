import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {

  passForm : FormGroup;
  checkForm = false;
  errMsg = "";
  successMsg = "";

  constructor(
    private _fb : FormBuilder,
    private _profile : ProfileService
  ) {
    this.passForm = this._fb.group({
      cur_pass : ["", Validators.required],
      new_pass : ["", Validators.required],
      confirm_new_pass : ["", Validators.required]
    })
   }

  ngOnInit(): void {
  }

  update(){
    if(this.passForm.invalid){
      this.checkForm = true;
      return;
    }
    this._profile.checkPassword(this.passForm.value).subscribe(result=>{
      // console.log(result);
      if(result.success == false && result.type == 1)
      {
        this.errMsg = "Your Current Password is Wrong";
      }else{
        this.successMsg = "Your Password Sussessfuly Updated";
        this.errMsg = "";
        this.passForm.reset();
      }
    })
  }

}
