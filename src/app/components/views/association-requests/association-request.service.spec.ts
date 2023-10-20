import { TestBed } from '@angular/core/testing';

import { AssociationRequestService } from './association-request.service';

describe('AssociationRequestService', () => {
  let service: AssociationRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssociationRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
