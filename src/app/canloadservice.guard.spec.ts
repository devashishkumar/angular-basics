import { TestBed } from '@angular/core/testing';

import { CanloadserviceGuard } from './canloadservice.guard';

describe('CanloadserviceGuard', () => {
  let guard: CanloadserviceGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanloadserviceGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
