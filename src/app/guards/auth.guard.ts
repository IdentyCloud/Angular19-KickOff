import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const AuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const token = localStorage.getItem('MTEA:ACESSTOKEN');

  const authRoutes = ['/auth/login', '/auth/register'];

  if (!token && !authRoutes.includes(state.url)) {
    router.navigate(['/auth/login']);
    return false;
  }

  if (token && authRoutes.includes(state.url)) {
    router.navigate(['/core/dashboard']);
    return false;
  }

  return true;
};