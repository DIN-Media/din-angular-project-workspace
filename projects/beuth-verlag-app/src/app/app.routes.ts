import {Routes} from '@angular/router';
import {isAuthenticated} from "./core/authorization/authorization.guard";
import {RoutingPaths} from "./core/const";

/**
 * Base Routes for the application.
 */
export const routes: Routes = [
  // Default route
  {
    path: '',
    redirectTo: RoutingPaths.HOME,
    pathMatch: 'full'
  },

  // Authentication routes
  {
    path: RoutingPaths.AUTHENTICATE,
    loadComponent: () => import('./layouts/authentication-layout/authentication-layout.component').then(item => item.AuthenticationLayoutComponent),
    loadChildren: () => import('./layouts/authentication-layout/authentication.routes').then(item => item.authenticationRoutes)
  },

  // Home routes
  {
    path: '',
    canActivate: [isAuthenticated],
    loadComponent: () => import('./layouts/home-layout/home-layout.component').then(item => item.HomeLayoutComponent),
    loadChildren: () => import('./layouts/home-layout/home-layout.routes').then(item => item.homeLayoutRoutes)
  },

  // Not found route
  {
    path: '**',
    redirectTo: RoutingPaths.HOME, // should redirect to page not found, but not implemented yet
    pathMatch: 'full'
  }
]
