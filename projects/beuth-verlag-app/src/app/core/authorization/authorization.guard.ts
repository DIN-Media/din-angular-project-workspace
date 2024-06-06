import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot} from "@angular/router";
import {inject} from "@angular/core";
import {SessionService} from "../authentication/session.service";

/**
 * Guard that checks if the user is authenticated.
 *
 * @param route
 * @param state
 * @param session
 * @param router
 */
export const isAuthenticated: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  session: SessionService = inject(SessionService),
  router: Router = inject(Router),
): Promise<boolean> | boolean => {

  return session.isAuthenticated() || router.navigate(['/authenticate/login'], {queryParams: {returnUrl: state.url}})

}


