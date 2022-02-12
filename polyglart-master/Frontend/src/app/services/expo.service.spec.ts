import { TestBed } from '@angular/core/testing';

import { ExpoService } from './expo.service';

describe('expoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExpoService = TestBed.get(ExpoService);
    expect(service).toBeTruthy();
  });
});
