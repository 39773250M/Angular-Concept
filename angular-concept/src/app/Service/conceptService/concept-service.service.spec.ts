import { TestBed } from '@angular/core/testing';

import { ConceptServiceService } from './concept-service.service';

describe('ConceptServiceService', () => {
  let service: ConceptServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConceptServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
