/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CardPaymentConfigResolverService } from './card-payment-config-resolver.service';

describe('Service: CardPaymentConfigResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardPaymentConfigResolverService]
    });
  });

  it('should ...', inject([CardPaymentConfigResolverService], (service: CardPaymentConfigResolverService) => {
    expect(service).toBeTruthy();
  }));
});
