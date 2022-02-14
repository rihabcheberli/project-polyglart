import { TestBed } from '@angular/core/testing';

import { expoService } from './expo.service';

describe('expoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: expoService = TestBed.get(expoService);
    expect(service).toBeTruthy();
  });
});
