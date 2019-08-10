import { Directive, Input, ElementRef, HostListener } from '@angular/core';
import { FormControl } from '@angular/forms';
import { isNullOrUndefined } from 'util';

const integerRegex: RegExp = new RegExp(/^[0-9]{1,20}$/g);

@Directive({
  selector: '[appIntAmount]'
})
export class IntAmountDirective {
@Input() appIntAmount: FormControl;
private previousValue: '';

constructor(private el: ElementRef) { }

@HostListener('input', ['$event'])
onInputEvent($event) {
  const nextValue = this.el.nativeElement.value;
  if(!isNullOrUndefined(nextValue)&&nextValue!==''&&!String(nextValue).match(integerRegex)){
    this.appIntAmount.setValue(this.previousValue);
  } else {
    this.previousValue = nextValue;
  }
}

@HostListener('focus', ['$event'])
onFocusEvent($event){
  this.previousValue = this.appIntAmount.value;
}
}
