import { Component, OnInit } from '@angular/core';
import { CityService } from '../../services/city.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  recordPerPage = 100;
  totalRec:any;
  totalPages:any;
  pageNo = 1;
  counter=0;
  isClass=1;

  allCity:any=[];
  constructor(
    private _city : CityService
  ) {

    this._city.getTotalCity().subscribe(result=>{
      // console.log(result);
      this.totalRec = result.total;
      this.totalPages = Math.ceil(this.totalRec/this.recordPerPage);
      
    })

    this._city.getCityPerPages(this.pageNo, this.recordPerPage).subscribe(result=>{
      this.allCity = result;
    })

   }

  ngOnInit(): void {
  }
  reset(){
    this._city.getTotalCity().subscribe(result=>{
      // console.log(result);
      this.totalRec = result.total;
      this.totalPages = Math.ceil(this.totalRec/this.recordPerPage);
      
    })

    this._city.getCityPerPages(this.pageNo, this.recordPerPage).subscribe(result=>{
      this.allCity = result;
    })
  }


  getRecord(n:any){
    this.isClass = n;
    this.pageNo = n;

    this.counter = (this.pageNo-1)*this.recordPerPage;

    this._city.getCityPerPages(this.pageNo, this.recordPerPage).subscribe(result=>{
      this.allCity = result;
    })
  }
}
