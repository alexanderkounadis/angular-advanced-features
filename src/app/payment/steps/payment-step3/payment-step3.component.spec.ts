/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PaymentStep3Component } from './payment-step3.component';

describe('PaymentStep3Component', () => {
  let component: PaymentStep3Component;
  let fixture: ComponentFixture<PaymentStep3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentStep3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentStep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
