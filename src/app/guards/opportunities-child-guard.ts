import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';

export const opportunitiesChildGuard: CanActivateChildFn = (childRoute, state) => {
  const router = inject(Router);
  const isLoggedIn:boolean = false;
  if (isLoggedIn) {
    return true;
  } else {
    return router.createUrlTree(["/login"]);
  };
};
