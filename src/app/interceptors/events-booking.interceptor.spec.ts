import { TestBed } from '@angular/core/testing';

import { EventsBookingInterceptor } from './events-booking.interceptor';

describe('EventsBookingInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      EventsBookingInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: EventsBookingInterceptor = TestBed.inject(EventsBookingInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
