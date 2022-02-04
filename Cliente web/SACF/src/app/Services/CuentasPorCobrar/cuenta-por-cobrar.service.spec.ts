import { TestBed } from '@angular/core/testing';

import { CuentaPorCobrarService } from './cuenta-por-cobrar.service';

describe('CuentaPorCobrarService', () => {
  let service: CuentaPorCobrarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuentaPorCobrarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
