import { TestBed } from '@angular/core/testing';

import { RESTApiService } from './restapi.service';

describe('RESTApiService', () => {
  let service: RESTApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RESTApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
