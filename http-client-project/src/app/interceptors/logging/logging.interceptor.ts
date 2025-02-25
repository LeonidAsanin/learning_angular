import {
  HttpEvent,
  HttpEventType,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { map, tap } from 'rxjs';

export const loggingInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
) => {
  // console.log('loggingInterceptor. request:', req);
  
  // return next(req).pipe(
  //   tap((event: HttpEvent<unknown>) => {
  //     if (event.type === HttpEventType.Response) {
  //       console.log(req.url, 'returned a response with status', event.status);
  //     }
  //   })
  // );

  // return next(req).pipe(
  //   map((event: HttpEvent<unknown>) => {
  //     if (event.type === HttpEventType.Response) {
  //       return event.clone({ body: 'myBody' });
  //     }
  //     return event;
  //   })
  // );

  return next(req);
};
