import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UserService } from '../services/user.service';

export const hasSupervisorRoleGuard: CanActivateFn = (route, state) => {
  console.log('Checking role');
  const userService = inject(UserService);
  return userService.isSupervisor();
};
