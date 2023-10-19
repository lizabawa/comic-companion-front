import { TestBed } from '@angular/core/testing';

import { ComicsListService } from './comics-list.service';

describe('ComicsListService', () => {
  let service: ComicsListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComicsListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
