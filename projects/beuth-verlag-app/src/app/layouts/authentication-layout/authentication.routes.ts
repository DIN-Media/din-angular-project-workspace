import {Routes} from "@angular/router";

/**
 * Routes for the children (subpages | subcomponents) of authentication layout.
 */
export const authenticationRoutes: Routes = [
  {
    path: 'login',
    title: 'DIN Beuth Verlag - Login',
    loadComponent: () => import('../../pages/login-page/login-page.component').then(item => item.LoginPageComponent)
  }
];
