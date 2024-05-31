import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home-page',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./layouts/home-layout/home.routes').then(item => item.homeRoutes)
  },
  {
    path: 'authenticate',
    loadChildren: () => import('./layouts/authentication-layout/authentication.routes').then(item => item.authenticationRoutes)
  },
  {
    path: '**',
    redirectTo: 'authenticate/login',
    pathMatch: 'full'
  }
]
