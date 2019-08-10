import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'amount-sigm'
})
export class AmountSignPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
