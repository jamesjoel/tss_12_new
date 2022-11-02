import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  user:any;
  constructor(
    private _profile : ProfileService
  ) {

    this._profile.getUserInfo().subscribe(result=>{
      // console.log(result);
      this.user = result;
    })

   }

  ngOnInit(): void {
  }

}
