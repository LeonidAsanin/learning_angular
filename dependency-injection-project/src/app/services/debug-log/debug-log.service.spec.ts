import { TestBed } from '@angular/core/testing';

import { DebugLogService } from './debug-log.service';

describe('DebugLogService', () => {
  let service: DebugLogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DebugLogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
