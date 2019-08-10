/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OtpService } from './otp.service';

describe('Service: Otp', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OtpService]
    });
  });

  it('should ...', inject([OtpService], (service: OtpService) => {
    expect(service).toBeTruthy();
  }));
});
