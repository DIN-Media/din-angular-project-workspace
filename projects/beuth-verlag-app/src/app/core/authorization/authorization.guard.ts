import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot} from "@angular/router";
import {inject} from "@angular/core";
import {AuthenticationApplication} from "../authentication/authentication.application";
import {RoutingPaths} from "../const";

/**
 * Guard that checks if the user is authenticated.
 *
 * @param route
 * @param state
 * @param application
 * @param router
 */
export const isAuthenticated: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  application: AuthenticationApplication = inject(AuthenticationApplication),
  router: Router = inject(Router),
): Promise<boolean> | boolean => {

  return application.isAuthenticated || router.navigate([RoutingPaths.AUTH_LOGIN], {queryParams: {returnUrl: state.url}})
}


