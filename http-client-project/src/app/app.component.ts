import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse,
} from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Todo } from './model/todo';
import { catchError, firstValueFrom, lastValueFrom, Observable, of, retry, throwError } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  httpClient = inject(HttpClient);

  constructor() {
    // Simple get request
    this.httpClient
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .subscribe((json: Object) => {
        console.log(1, json);
      });

    // Simple get request with type
    this.httpClient
      .get<Todo>('https://jsonplaceholder.typicode.com/todos/1')
      .subscribe((json: Todo) => {
        console.log(2, json);
      });

    // Get request with other response type
    this.httpClient
      .get('https://jsonplaceholder.typicode.com/todos/1', {
        responseType: 'text', // possible options: json (default), text, arraybuffer, blob
      })
      .subscribe((text) => {
        console.log(3, text);
      });

    // Post request
    this.httpClient
      .post('https://jsonplaceholder.typicode.com/todos', {
        title: 'title_test',
        userId: 100,
        completed: true,
      })
      .subscribe((json: Object) => {
        console.log(4, json);
      });

    // Post request with type
    this.httpClient
      .post<Todo>('https://jsonplaceholder.typicode.com/todos', {
        title: 'title_test',
        userId: 100,
        completed: true,
      })
      .subscribe((json: Todo) => {
        console.log(5, json);
      });

    // Get request with query parameter as part of url
    this.httpClient
      .get<Todo>('https://jsonplaceholder.typicode.com/todos/?id=2')
      .subscribe((json: Todo) => {
        console.log(6, json);
      });

    // Get request with query parameter as plain js object
    this.httpClient
      .get<Todo>('https://jsonplaceholder.typicode.com/todos', {
        params: {
          id: 2,
        },
      })
      .subscribe((json: Todo) => {
        console.log(7, json);
      });

    // Get request with query parameter as HttpParams object
    this.httpClient
      .get<Todo>('https://jsonplaceholder.typicode.com/todos', {
        params: new HttpParams().set('id', 2),
      })
      .subscribe((json: Todo) => {
        console.log(8, json);
      });

    // Request with headers as plain js object
    this.httpClient
      .get('https://jsonplaceholder.typicode.com/todos', {
        headers: {
          'X-Debug-Level': 'verbose',
        },
      })
      .subscribe((config) => {
        // ...
      });

    // Request with headers as plain js object
    this.httpClient
      .get('https://jsonplaceholder.typicode.com/todos', {
        headers: new HttpHeaders().set('X-Debug-Level', 'verbose'),
      })
      .subscribe((config) => {
        // ...
      });

    // Request with
    this.httpClient
      .get<Todo>('https://jsonplaceholder.typicode.com/todos/10', {
        observe: 'response',
      })
      .subscribe((response: HttpResponse<Todo>) => {
        console.log('Response status:', response.status);
        console.log('Body:', response.body);
      });

    // Request with retry and error handling
    // this.httpClient
    //   .get<Todo>('https://jsonplaceholder.typicode.com/todos/100000')
    //   .pipe(
    //     retry(1),
    //     catchError((error) => {
    //       console.warn(error);
    //       // return throwError(
    //       //   () =>
    //       //     new Error('Oops! Something went wrong. Please try again later.')
    //       // );
    //       return of({});
    //     }),
    //   )
    //   .subscribe((json) => {
    //     console.log(9, json);
    //   });

    // Convert observable request to promise
    const observable$: Observable<Todo> = this.httpClient.get<Todo>(
      'https://jsonplaceholder.typicode.com/todos/1'
    );
    // const promise: Promise<Todo> = firstValueFrom(observable$);
    const promise: Promise<Todo> = lastValueFrom(observable$);
    promise.then((json) => {
      console.log('Json from promise:', json)
    }).catch((error) => {
      console.warn('Handle promise reject:', error);
    });

    // Make several request by one observable
    const observable2$: Observable<Todo> = this.httpClient.get<Todo>(
      'https://jsonplaceholder.typicode.com/todos/13'
    );
    observable2$.subscribe((json) => {
      console.log(10, json)
    });
    observable2$.subscribe((json) => {
      console.log(11, json)
    });
  }
}
