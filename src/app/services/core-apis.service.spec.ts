import { TestBed } from '@angular/core/testing';

import { CoreApisService } from './core-apis.service';

describe('CoreApisService', () => {
  let service: CoreApisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoreApisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
