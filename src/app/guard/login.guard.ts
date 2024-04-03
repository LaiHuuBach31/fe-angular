import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

export const loginGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state:RouterStateSnapshot) :boolean => {
  const isLogin = sessionStorage.getItem('login');
  const router = inject(Router);
  if(!isLogin){
    router.navigateByUrl('/login');
    return false;
  }
  return true;
};
