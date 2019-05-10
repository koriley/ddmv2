import { TestBed } from '@angular/core/testing';

import { VisabilityService } from './visability.service';

describe('VisabilityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VisabilityService = TestBed.get(VisabilityService);
    expect(service).toBeTruthy();
  });
});
