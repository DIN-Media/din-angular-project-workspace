import {Routes} from "@angular/router";
import {PageNames, RoutingPaths} from "../../core/const";

/**
 * Routes for the children (subpages | subcomponents) of the home layout.
 *
 */
export const homeLayoutRoutes: Routes = [
  {
    path: RoutingPaths.HOME,
    title: PageNames.BASE_NAME + RoutingPaths.HOME.toUpperCase(),
    loadComponent: () => import('../../pages/home-page/home-page.component').then(item => item.HomePageComponent)
  }
]
