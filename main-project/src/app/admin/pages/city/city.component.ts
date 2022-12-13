import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/services/city.service';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  allCity : any;
  recPerPage = 100;
  skip=0;
  totalRec=0;
  atBottom = false;
  constructor(
    private _city : CityService
  ) { 

    this._city.getAllCity(this.skip, this.recPerPage).subscribe(result=>{
      this.allCity = result;
    })

    this._city.getTotalCity().subscribe(result=>{
      this.totalRec = result.total;
    })

  }

  @HostListener('document:scroll')
    onDemo(){
     

      let scrollH = document.documentElement.scrollTop;
      let pageH = document.documentElement.offsetHeight;

      if(scrollH+635 == pageH){
        console.log("*****");
        // this.skip = this.skip+100;
        // this.getRecord();
      }

     
    }

  ngOnInit(): void {
  }

  getRecord(){
    this._city.getAllCity(this.skip, this.recPerPage).subscribe(result=>{
      // this.allCity.push(result);
      console.log(result);
    })
  }
  
}
