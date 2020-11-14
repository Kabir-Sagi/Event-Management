import { TestBed } from '@angular/core/testing';

import { ProEventsGuard } from './pro-events.guard';

describe('ProEventsGuard', () => {
  let guard: ProEventsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProEventsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
