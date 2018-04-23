import { TestBed, inject } from '@angular/core/testing';

import { ThirukuralService } from './thirukural.service';

describe('ThirukuralService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThirukuralService]
    });
  });

  it('should be created', inject([ThirukuralService], (service: ThirukuralService) => {
    expect(service).toBeTruthy();
  }));
});
