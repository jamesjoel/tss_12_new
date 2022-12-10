import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  allCity : any;
  recPerPage = 100;
  totalRec=0;
  constructor(
    private _city : CityService
  ) { 

    this._city.getAllCity(this.recPerPage).subscribe(result=>{
      this.allCity = result;
    })

    this._city.getTotalCity().subscribe(result=>{
      this.totalRec = result.total;
    })

  }

  ngOnInit(): void {
  }

}
