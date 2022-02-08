import { TestBed } from '@angular/core/testing';

import { KnihyDBService } from './knihy-db.service';

describe('KnihyDBService', () => {
  let service: KnihyDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KnihyDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
