import {Routes} from '@angular/router';
import {isAuthenticated} from "./core/authorization/authorization.guard";

/**
 * Base Routes for the application.
 */
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    canActivate: [isAuthenticated],
    loadChildren: () => import('./layouts/home-layout/home.routes').then(item => item.homeRoutes)
  },
  {
    path: 'authenticate',
    loadChildren: () => import('./layouts/authentication-layout/authentication.routes').then(item => item.authenticationRoutes)
  },
  {
    path: '**',
    redirectTo: 'home', // should redirect to page not found, but not implemented yet
    pathMatch: 'full'
  }
]
