import {Routes} from "@angular/router";

export const authenticationRoutes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('../../pages/login-page/login-page.component').then(item => item.LoginPageComponent)
  }
];