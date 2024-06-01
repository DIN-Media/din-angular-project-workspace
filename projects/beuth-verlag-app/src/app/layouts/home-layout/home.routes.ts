import {Routes} from "@angular/router";

/**
 * Routes for the children (subpages | subcomponents) of the home layout.
 *
 */
export const homeRoutes: Routes = [
  {
    path: 'home',
    title: 'DIN Beuth Verlag - Home',
    loadComponent: () => import('../../pages/home-page/home-page.component').then(item => item.HomePageComponent)
  }
]
