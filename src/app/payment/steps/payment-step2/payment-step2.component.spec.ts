/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PaymentStep2Component } from './payment-step2.component';

describe('PaymentStep2Component', () => {
  let component: PaymentStep2Component;
  let fixture: ComponentFixture<PaymentStep2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentStep2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
