import { TestBed } from '@angular/core/testing';

import { OffersHttpService } from './offers-http.service';

describe('OffersHttpService', () => {
  let service: OffersHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OffersHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
