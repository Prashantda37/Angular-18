import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const authStorage = localStorage.getItem("authentication");
  const router: Router = inject(Router)
  if (authStorage) {
    return true;
  } else {
    localStorage.clear()
    router.navigateByUrl('login')
    return false;
  }
};

export const loginGuard: CanActivateFn = (route, state) => {
  const authStorage = localStorage.getItem("authentication");
  const router: Router = inject(Router)
  if (authStorage) {
    router.navigateByUrl('home')
    return false;
  } else {
    return true;
  }
};
