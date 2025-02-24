import { HttpEvent, HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { CACHING_ENABLED } from './logging.interceptor';
import { Observable, of } from 'rxjs';

export const cachingInterceptor: HttpInterceptorFn = (req, next) => {
  let response: Observable<HttpEvent<unknown>>;
  if (req.context.get(CACHING_ENABLED)) {
    //cache logic
    const resp = new HttpResponse({
      body: 'response body',
    });
    response = of(resp);
  } else {
    response = next(req);
  }
  return response;
};
