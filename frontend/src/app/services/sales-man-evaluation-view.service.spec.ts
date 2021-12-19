import { TestBed } from '@angular/core/testing';

import { SalesManEvaluationViewService } from './sales-man-evaluation-view.service';

describe('SalesManEvaluationViewService', () => {
  let service: SalesManEvaluationViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalesManEvaluationViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
