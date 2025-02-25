import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { hasSupervisorRoleGuard } from './has-supervisor-role.guard';

describe('hasSupervisorRoleGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => hasSupervisorRoleGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
