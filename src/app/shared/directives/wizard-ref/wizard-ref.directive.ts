import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appWizardRef]'
})
export class WizardRefDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
