/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GuidedTourService } from './guided-tour.service';

describe('Service: GuidedTour', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuidedTourService]
    });
  });

  it('should ...', inject([GuidedTourService], (service: GuidedTourService) => {
    expect(service).toBeTruthy();
  }));
});
