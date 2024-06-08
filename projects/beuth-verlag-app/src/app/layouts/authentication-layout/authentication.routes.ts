import {Routes} from "@angular/router";
import {PageNames, RoutingPaths} from "../../core/const";

/**
 * Routes for the children (subpages | subcomponents) of authentication layout.
 */
export const authenticationRoutes: Routes = [
  {
    path: RoutingPaths.LOGIN,
    title: PageNames.BASE_NAME + RoutingPaths.LOGIN.toUpperCase(),
    loadComponent: () => import('../../pages/login-page/login-page.component').then(item => item.LoginPageComponent)
  }
];
