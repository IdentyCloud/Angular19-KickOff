import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

import { UserRole } from '@/app/models/user-role.enum';

export const RoleGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);


  try {
    // solo van a tener token los USER | COLLABORATOR | ADMINISTRATOR
    const token = localStorage.getItem('MTEA:ACESSTOKEN');
    const decodedToken = jwtDecode<any>(token || '');
    console.log('ROL', decodedToken.role)
    return true;
  } catch (error) {
    // solo van a entrar los ANONYMOUS
    console.log('ROL ANONYMOUS')
    return true;
  }
};