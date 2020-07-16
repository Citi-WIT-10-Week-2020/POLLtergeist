import { TestBed } from '@angular/core/testing';

import { InternalheaderService } from './internalheader.service';

describe('InternalheaderService', () => {
  let service: InternalheaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InternalheaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
