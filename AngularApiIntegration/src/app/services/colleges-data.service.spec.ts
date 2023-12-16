import { TestBed } from '@angular/core/testing';

import { CollegesDataService } from './colleges-data.service';

describe('CollegesDataService', () => {
  let service: CollegesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollegesDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
