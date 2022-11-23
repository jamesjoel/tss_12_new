import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  transform(a:any, b:any) {
    if(b=='electronics')
    {
      let x = a*20/100;
      let y = a-x;
      return y;
    }
    else{
      let x = a*10/100;
      let y = a-x;
      return y;
    }
    
  }

}
