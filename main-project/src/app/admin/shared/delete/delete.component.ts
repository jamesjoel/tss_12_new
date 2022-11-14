import { Input, Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  @Input() data:any;
  @Output() myEvent = new EventEmitter;
  constructor() { }

  ngOnInit(): void {
  }

  confirm_delete(btn:any){
    btn.click();
    this.myEvent.emit();
  }

}
