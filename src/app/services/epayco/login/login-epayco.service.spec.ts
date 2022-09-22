import { TestBed } from '@angular/core/testing';

import { LoginEpaycoService } from './login-epayco.service';

describe('LoginEpaycoService', () => {
  let service: LoginEpaycoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginEpaycoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
