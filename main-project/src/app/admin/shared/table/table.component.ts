import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() colNames : any = [];
  @Input() data : any = [];
  @Input() propName : any = [];
  @Input() upDateUrl : any;
  constructor() { }

  ngOnInit(): void {
  }

}
