import { TestBed } from '@angular/core/testing';

import { OperatingSystemsService } from './operating-systems.service';

describe('OperatingSystemsService', () => {
  let service: OperatingSystemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OperatingSystemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
