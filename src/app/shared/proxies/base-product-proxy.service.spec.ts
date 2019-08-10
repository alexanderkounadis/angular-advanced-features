/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BaseProductProxyService } from './base-product-proxy.service';

describe('Service: BaseProductProxy', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BaseProductProxyService]
    });
  });

  it('should ...', inject([BaseProductProxyService], (service: BaseProductProxyService) => {
    expect(service).toBeTruthy();
  }));
});
