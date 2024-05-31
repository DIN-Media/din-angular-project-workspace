import {ApplicationConfig, provideExperimentalZonelessChangeDetection, provideZoneChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(), // for better control of the change of state managed themselves by the signals and not by the zone.
    provideRouter(routes),
    provideAnimationsAsync(),
    provideAnimationsAsync()
  ]
};
