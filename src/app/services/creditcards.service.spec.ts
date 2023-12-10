import { TestBed } from '@angular/core/testing';

import { CreditcardsService } from './creditcards.service';

describe('CreditcardsService', () => {
  let service: CreditcardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreditcardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
