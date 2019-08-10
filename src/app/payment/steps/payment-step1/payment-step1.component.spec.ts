/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PaymentStep1Component } from './payment-step1.component';

describe('PaymentStep1Component', () => {
  let component: PaymentStep1Component;
  let fixture: ComponentFixture<PaymentStep1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentStep1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
