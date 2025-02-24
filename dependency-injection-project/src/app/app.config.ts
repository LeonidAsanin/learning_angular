import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { LogService } from './services/log/log.service';
import { provideAppConfig } from './config/app.config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    // { provide: LogService },
    provideAppConfig(),
  ],
};
