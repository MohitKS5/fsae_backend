import { TestBed, inject } from '@angular/core/testing';

import { GuardsService } from './guards.service';

describe('GuardsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuardsService]
    });
  });

  it('should be created', inject([GuardsService], (service: GuardsService) => {
    expect(service).toBeTruthy();
  }));
});
