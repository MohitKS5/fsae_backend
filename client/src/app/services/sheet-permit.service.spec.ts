import { TestBed, inject } from '@angular/core/testing';

import { SheetPermitService } from './sheet-permit.service';

describe('SheetPermitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SheetPermitService]
    });
  });

  it('should be created', inject([SheetPermitService], (service: SheetPermitService) => {
    expect(service).toBeTruthy();
  }));
});
