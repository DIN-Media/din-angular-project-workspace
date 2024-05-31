import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then(item => item.HomeComponent)
  },
  {
    path: 'authenticate',
  },
  {
    path: '**',
    redirectTo: 'authenticate/login',
    pathMatch: 'full'
  }
]
