/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InternationalDialCodesService } from './international-dial-codes.service';

describe('Service: InternationalDialCodes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InternationalDialCodesService]
    });
  });

  it('should ...', inject([InternationalDialCodesService], (service: InternationalDialCodesService) => {
    expect(service).toBeTruthy();
  }));
});
