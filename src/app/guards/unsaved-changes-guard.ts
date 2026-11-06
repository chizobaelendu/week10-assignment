import { CanDeactivateFn } from '@angular/router';

//Access to a route is GRANTED if a guard function returns true, while it is DENIED if a guard function returns false.
//"any" data-type MUST be used in CanDeactivate guard.
export const unsavedChangesGuard: CanDeactivateFn<any> = (component) => {
  if (component.anyUnsavedChanges) {
    return confirm("Are you sure you want to exit this page ? You will have to start aflesh next time");
  } else {
    return true;
  };
};

