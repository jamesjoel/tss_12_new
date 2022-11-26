import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  transform(a:any, b:any) {
    let x = a*b/100;
    let y = a-x;
    return y;
  }

}
