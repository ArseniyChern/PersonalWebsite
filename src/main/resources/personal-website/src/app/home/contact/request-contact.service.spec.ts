import { TestBed, inject } from '@angular/core/testing';

import { RequestContactService } from './request-contact.service';

describe('RequestContactService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequestContactService]
    });
  });

  it('should be created', inject([RequestContactService], (service: RequestContactService) => {
    expect(service).toBeTruthy();
  }));
});
