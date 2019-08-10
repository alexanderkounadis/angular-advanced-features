import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'float-to-money'
})
export class FloatToMoneyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
