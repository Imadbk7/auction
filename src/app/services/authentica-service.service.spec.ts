import { TestBed } from '@angular/core/testing';

import { AuthenticaServiceService } from '../authentica-service.service';

describe('AuthenticaServiceService', () => {
  let service: AuthenticaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
