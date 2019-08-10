import { Directive, Input, Renderer2, ElementRef, HostListener } from '@angular/core';
import { FormGroup, NgControl } from '@angular/forms';

@Directive({
  selector: '[appInputVal]'
})
export class InputValDirective {
  @Input('form') form: FormGroup;
  @Input('control') ctrl: NgControl;
  constructor(private renderer: Renderer2,
    private _elemRef: ElementRef) { }
  @HostListener('blur', ['$event'])
  onBlurEvent($event) {
    const nextValue = this._elemRef.nativeElement.value;
    if (this.ctrl && this.ctrl.invalid && this.ctrl.dirty) {
      this.renderer.addClass(this._elemRef.nativeElement, 'validation-error');
    }
  }
}
