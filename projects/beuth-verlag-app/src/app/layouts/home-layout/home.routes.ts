import {Routes} from "@angular/router";

export const homeRoutes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('../../pages/home-page/home-page.component').then(item => item.HomePageComponent)
    }
]
