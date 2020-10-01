import { TestBed } from '@angular/core/testing';

import { BooksManagerServiceService } from './books-manager-service.service';

describe('BooksManagerServiceService', () => {
  let service: BooksManagerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksManagerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
