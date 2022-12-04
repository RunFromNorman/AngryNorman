import { TestBed } from '@angular/core/testing';

import { NormanService } from './norman.service';

describe('NormanService', () => {
  let service: NormanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NormanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
