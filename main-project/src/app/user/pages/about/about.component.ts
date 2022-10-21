import { Component, OnInit } from '@angular/core';
import { MyServService } from '../../services/my-serv.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public a : MyServService) { }

  ngOnInit(): void {
  }

}
