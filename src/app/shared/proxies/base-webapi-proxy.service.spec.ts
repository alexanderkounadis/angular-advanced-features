/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BaseWebapiProxyService } from './base-webapi-proxy.service';

describe('Service: BaseWebapiProxy', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BaseWebapiProxyService]
    });
  });

  it('should ...', inject([BaseWebapiProxyService], (service: BaseWebapiProxyService) => {
    expect(service).toBeTruthy();
  }));
});
