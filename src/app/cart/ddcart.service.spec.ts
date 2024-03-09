import { TestBed } from '@angular/core/testing';

import { DdcartService } from './ddcart.service';

describe('DdcartService', () => {
  let service: DdcartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DdcartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
