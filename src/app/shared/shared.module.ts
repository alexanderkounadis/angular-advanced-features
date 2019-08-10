import { WizardComponent } from './components/wizard/wizard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardRefDirective } from './directives/wizard-ref/wizard-ref.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WizardComponent, WizardRefDirective]
})
export class SharedModule { }
