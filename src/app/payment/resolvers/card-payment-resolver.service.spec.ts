/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CardPaymentResolverService } from './card-payment-resolver.service';

describe('Service: CardPaymentResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardPaymentResolverService]
    });
  });

  it('should ...', inject([CardPaymentResolverService], (service: CardPaymentResolverService) => {
    expect(service).toBeTruthy();
  }));
});
