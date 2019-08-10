/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Customers.proxyService } from './customers.proxy.service';

describe('Service: Customers.proxy', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Customers.proxyService]
    });
  });

  it('should ...', inject([Customers.proxyService], (service: Customers.proxyService) => {
    expect(service).toBeTruthy();
  }));
});
