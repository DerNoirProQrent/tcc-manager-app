import { TestBed, inject } from '@angular/core/testing';

import { TrainingExistGuardService } from './training-exist-guard.service';

describe('TrainingExistGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrainingExistGuardService]
    });
  });

  it('should be created', inject([TrainingExistGuardService], (service: TrainingExistGuardService) => {
    expect(service).toBeTruthy();
  }));
});
