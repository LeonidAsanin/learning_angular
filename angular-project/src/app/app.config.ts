import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { loggingInterceptor } from './interceptors/logging.interceptor';
import { headerSetterInterceptor } from './interceptors/header-setter.interceptor';
import { cachingInterceptor } from './interceptors/caching.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([
        loggingInterceptor,
        headerSetterInterceptor,
        cachingInterceptor,
      ])
    ),
  ],
};
