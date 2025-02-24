import { HttpInterceptorFn } from '@angular/common/http';

export const headerSetterInterceptor: HttpInterceptorFn = (req, next) => {
  const updatedRequest = req.clone({
    headers: req.headers.set('X-Request-Id', 'request-id-123'),
  });
  return next(updatedRequest);
};
