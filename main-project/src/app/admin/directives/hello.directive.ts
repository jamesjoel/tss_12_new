import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHello]'
})
export class HelloDirective {

  constructor(
    private _ele : ElementRef
  ) {
    this._ele.nativeElement.style.backgroundColor = "green";
   }

   @HostListener('dblclick') demo(){
    this._ele.nativeElement.style.backgroundColor = "red";
   }
}
