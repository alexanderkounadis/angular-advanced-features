/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PaymentDataResolverService } from './payment-data-resolver.service';

describe('Service: PaymentDataResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaymentDataResolverService]
    });
  });

  it('should ...', inject([PaymentDataResolverService], (service: PaymentDataResolverService) => {
    expect(service).toBeTruthy();
  }));
});
