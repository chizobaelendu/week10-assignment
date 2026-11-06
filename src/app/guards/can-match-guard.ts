import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';

export const canMatchGuard: CanMatchFn = (route, segments) => {
  const router = inject(Router);
  const isLoggedIn:boolean = true;
   if (isLoggedIn) {
    return true;
  } else {
    return router.createUrlTree(["/login"]);
  };
};
