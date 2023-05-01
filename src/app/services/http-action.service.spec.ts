import { TestBed } from '@angular/core/testing';

import { HttpActionService } from './http-action.service';

describe('HttpActionService', () => {
  let service: HttpActionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpActionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
