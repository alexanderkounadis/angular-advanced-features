/* tslint:disable:no-unused-variable */

import { TestBed, async, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { IntAmountDirective } from './int-amount.directive';
import { Component, OnInit, DebugElement } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

@Component({
  template: `<input type="text" [formControl]="amountInput" [appIntAmount]="amountInput"/>`
})

class TestIntNumberComponent implements OnInit {
  public testForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(){
    this.testForm = this.formBuilder.group({
      amountInput: new FormControl('', [])
    });
  }
  get amountInput() {
    return this.testForm?(this.testForm.get('amountInput') as FormControl): null;
  }
}

describe('IntAmountDirective', () => {
  let component: TestIntNumberComponent;
  let fixture: ComponentFixture<TestIntNumberComponent>;
  let inputEl: DebugElement;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [TestIntNumberComponent, IntAmountDirective]
    });
    fixture = TestBed.createComponent(TestIntNumberComponent);
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.css('input'));
  });

  it('should create new instance', ()=>{
    const directive = new IntAmountDirective(inputEl);
    expect(directive).toBeTruthy();
  });

  it('should accept integer number', fakeAsync(() => {
    component.ngOnInit();
    fixture.detectChanges();
    tick();
    inputEl.nativeElement.value = 12;
    inputEl.nativeElement.dispatchEvent(new Event('input'));
    tick();
    fixture.detectChanges();
    tick();
    // execute
    inputEl.triggerEventHandler('input', null);
    fixture.detectChanges();
    tick();
    expect(component.amountInput.value.toString()).toBe('12');
    expect(+component.amountInput.value).toBe(12);
  }));

  it('should not accept special characters', fakeAsync(()=>{
    component.ngOnInit();
    fixture.detectChanges();
    tick();
    inputEl.nativeElement.value = 12;
    inputEl.nativeElement.dispatchEvent(new Event('focus'));
    inputEl.nativeElement.dispatchEvent(new Event('input'));
    tick();
    fixture.detectChanges();
    tick();
    // execute
    inputEl.triggerEventHandler('input', null);
    fixture.detectChanges();
    tick();
    expect(component.amountInput.value.toString()).toBe('12');
    expect(+component.amountInput.value).toBe(12);

    // prepare
    inputEl.nativeElement.value = '12#@';
    inputEl.nativeElement.dispatchEvent(new Event('input'));
    tick();
    fixture.detectChanges();
    tick();
    // execute
    inputEl.triggerEventHandler('input', null);
    fixture.detectChanges();
    tick();
    // assert
    expect(component.amountInput.value.toString()).toBe('12');
  }));

  
})
