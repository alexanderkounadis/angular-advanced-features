import { Directive, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { ControlContainer, FormGroupDirective, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appValidationMessages]'
})
export class ValidationMessagesDirective implements OnInit {
@Input() appValidationMessages: string = null;
@Input('controlDescription') controlDescription: string = null;
@Output() validationStatus: EventEmitter<{fieldName: string, hasErrors: boolean, message?:string}> = 
  new EventEmitter<{fieldName: string, hasErrors: boolean, message?:string}>();
private control: AbstractControl = null;

constructor(private container: ControlContainer) { }

ngOnInit(): void {
  const formDirective = (<FormGroupDirective>this.container);
  this.control = formDirective.form.controls[this.appValidationMessages];
  formDirective.ngSubmit.subscribe((_) => {
    this.observeChangesAndHandleErrors();
  });
}

@HostListener('blur') onblur() {
  if(this.control.dirty)
  {
    this.observeChangesAndHandleErrors();
  }
}

private hasSubscribedToChanges = false;
private observeChangesAndHandleErrors() :void {
  if(!this.hasSubscribedToChanges){
    this.control.valueChanges.subscribe((_) => {
      this.handleErrors()
    });
  }
  this.handleErrors();
}

private handleErrors() : void {
  if(this.control.invalid) {
    let errorDescriptor: {message: string, hasError: boolean};
    let index = 0;
    do {
      errorDescriptor = null
    }while(false);
  }
}

private errorsOrdering = [
  (errorDescriptor: any): {message: string, hasError: boolean} => {
    if(errorDescriptor.required){
      return {
        hasError: true, message: 'Error in form validation'
      }
    }
  }
];
}
