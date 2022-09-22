import { TestBed } from '@angular/core/testing';

import { TransctionService } from './transction.service';

describe('TransctionService', () => {
  let service: TransctionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransctionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
