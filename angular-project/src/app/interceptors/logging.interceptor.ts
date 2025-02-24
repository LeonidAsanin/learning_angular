import { HttpContextToken, HttpEventType, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { tap } from 'rxjs';
import { Logger } from '../services/logger.service';

export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
  const logger = inject(Logger);

  req.context.set(CACHING_ENABLED, false);

  return next(req).pipe(
    tap((event) => {
      if (event.type === HttpEventType.Response) {
        logger.debug(`Http response: url=${req.url} status=${event.status}`);
      }
    })
  );
};

export const CACHING_ENABLED = new HttpContextToken<boolean>(() => true);
