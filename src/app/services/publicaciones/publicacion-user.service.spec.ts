import { TestBed } from '@angular/core/testing';

import { PublicacionUserService } from './publicacion-user.service';

describe('PublicacionUserService', () => {
  let service: PublicacionUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublicacionUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
