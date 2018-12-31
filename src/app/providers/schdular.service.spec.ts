import { TestBed } from '@angular/core/testing';

import { SchdularService } from './schdular.service';

describe('SchdularService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SchdularService = TestBed.get(SchdularService);
    expect(service).toBeTruthy();
  });
});
