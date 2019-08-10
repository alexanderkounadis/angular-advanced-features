import { Directive, Input, HostListener, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { isNullOrUndefined } from 'util';

@Directive({
  selector: '[appCapitalLettersInput]'
})
export class CapitalLettersInputDirective {
  @Input() appCapitalLetters: FormControl;

  private acceptableRegex: RegExp = new RegExp(/^[a-zA-Zα-ωΑ-Ω]+$/g);
  private previousValue: '';

  @HostListener('input', ['$event'])
  onInputEvent() {
    const nextValue = this.el.nativeElement.value;
    if (!isNullOrUndefined(nextValue) && nextValue !== '' 
      && !String(nextValue).match(this.acceptableRegex)) {
      this.appCapitalLetters.setValue(this.previousValue);
    } else {
      this.previousValue = nextValue;
    }
  }

  @HostListener('blur', ['$event'])
  onBlurEvent() {
    const nextValue = this.el.nativeElement.value;
    const formattedValue = nextValue.toUpperCase();
    if (String(formattedValue).match(this.acceptableRegex)) {
      this.previousValue = formattedValue;
      this.appCapitalLetters.setValue(formattedValue);
    }
  }
  constructor(private el: ElementRef) { }

}
