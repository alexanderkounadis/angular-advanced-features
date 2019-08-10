import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enum-to-currency'
})
export class EnumToCurrencyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
