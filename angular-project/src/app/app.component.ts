import {
  Component,
  ElementRef,
  inject,
  InjectionToken,
  signal,
  viewChild,
  ViewContainerRef,
} from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CounterComponent } from './component/counter/counter.component';
import { InputComponent } from './component/input/input.component';
import { CardComponent } from './component/card/card.component';
import { RedTextComponent } from './component/red-text/red-text.component';
import { CommonModule } from '@angular/common';
import { StateChangerComponent } from './component/state-changer/state-changer.component';
import { StateService } from './services/state/state.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, lastValueFrom, Observable, retry, throwError } from 'rxjs';
import { HighlightDirective } from './directives/highlight.directive';

interface Config {
  baseUrl: string;
}
const CONFIG = new InjectionToken<Config>("App's Config");
const config = {
  baseUrl: '/app',
};
const configProvider = {
  provide: CONFIG,
  useValue: config,
};

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterModule,
    CounterComponent,
    InputComponent,
    CardComponent,
    RedTextComponent,
    CommonModule,
    StateChangerComponent,
    HighlightDirective,
  ],
  providers: [configProvider],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  date = new Date();
  title = 'angular-project';
  counterVisible = signal(true);
  inputValue = signal('');
  cardComponent = viewChild(CardComponent);
  divComponent = viewChild<ElementRef<HTMLDivElement>>('myDiv');
  config = inject(CONFIG);
  stateService = inject(StateService);
  counterInputs = {
    intervalDelta: 1500,
  };

  httpClient = inject(HttpClient);

  constructor(public viewContainer: ViewContainerRef) {
    // const counterComponentRef = viewContainer.createComponent(CounterComponent);
    // counterComponentRef.setInput('intervalDelta', 750);

    console.log('Base url: ', config.baseUrl);
  }

  getText() {
    return $localize`Hello, World!`;
  }

  toggleCounterVisibility() {
    this.counterVisible.update((previousValue) => !previousValue);
  }

  removeCounter() {
    this.counterVisible.set(false);
    console.log('!!!', this.inputValue());
  }

  handleInput(event: string | undefined) {
    console.log(
      event,
      this.cardComponent(),
      this.divComponent()?.nativeElement.className
    );
  }

  handleBlack() {
    setTimeout(() => alert('Pink!'), 100);
  }

  handleCardClick(event: Event) {
    console.log(
      '[AppComponent] Click in card',
      event,
      this.stateService.getState()
    );
  }

  getCounterComponent() {
    return this.counterVisible() ? CounterComponent : null;
  }

  test() {
    this.httpClient.get<Config>('/api/config').subscribe((config) => {
      // process the configuration.
    });

    this.httpClient
      .get('/images/dog.jpg', { responseType: 'arraybuffer' }) // responseType: 'blob' | 'json' | 'text' | 'arraybuffer'. json is default
      .subscribe((buffer) => {
        console.log('The image is ' + buffer.byteLength + ' bytes large');
      });

    this.httpClient
      .post<Config>('/api/config', { baseUrl: 'http://localhost:3000' })
      .subscribe((config) => {
        console.log('Updated config:', config);
      });

    this.httpClient
      .get('/api/config', {
        params: { filter: 'all' },
      })
      .subscribe((config) => {
        // ...
      });

    const baseParams = new HttpParams().set('filter', 'all');
    this.httpClient
      .get('/api/config', {
        params: baseParams.set('details', 'enabled'),
        headers: {
          'X-Debug-Level': 'verbose',
        },
      })
      .subscribe((config) => {
        // ...
      });

    const baseHeaders = new HttpHeaders().set('X-Debug-Level', 'minimal');
    this.httpClient
      .get<Config>('/api/config', {
        headers: baseHeaders.set('X-Debug-Level', 'verbose'),
      })
      .subscribe((config) => {
        // ...
      });

    this.httpClient
      .get<Config>('/api/config', { observe: 'response' })
      .subscribe((response) => {
        console.log('Response status:', response.status);
        console.log('Body:', response.body);
      });

    this.httpClient
      .get<Config>('https://api.example.com/data')
      .pipe(
        retry(3), // Try the delivery up to 3 times
        catchError((error) => {
          // Quality control catches the problem
          console.error('Delivery problem:', error);
          // Send an apology note or fix the issue
          return throwError(
            () =>
              new Error('Oops! Something went wrong. Please try again later.')
          );
        })
      )
      .subscribe((data) => {
        // Successful delivery
      });

    const promise: Promise<Config> = lastValueFrom(
      this.httpClient.get<Config>('/api/config')
    );
    promise.then((config) => {
      console.log('Config:', config);
    });
  }

  getUser(id: string): Observable<Config> {
    return this.httpClient.get<Config>(`/api/user/${id}`);
  }

  async fetchTodo() {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/todos/1'
    );
    if (!response.ok) {
      throw response;
    }
    const json = await response.json();
    return json;
  }

  async getTodo() {
    const observable = this.httpClient.get(
      'https://jsonplaceholder.typicode.com/todos/1'
    )
    .pipe(
      retry(3),
      catchError((error) => {
        console.error('Delivery problem:', error);
        return throwError(
          () =>
            new Error('Oops! Something went wrong. Please try again later.')
        );
      })
    );
    const promise = lastValueFrom(observable);
    const json = await promise;
    return json;
  }

  testFetch() {
    this.fetchTodo().then((json) => {
      console.log('from fetch:', json);
    }).catch((error) => {
      console.error('Error from fetch:', error);
    });
  }

  testHttpClient() {
    this.getTodo().then((json) => {
      console.log('from httpClient:', json);
    }).catch((error) => {
      console.error('Error from httpClient:', error);
    });;
  }
}

if (typeof Worker !== 'undefined') {
  // Create a new
  const worker = new Worker(new URL('./app.worker', import.meta.url));
  worker.onmessage = ({ data }) => {
    console.log(`page got message: ${data}`);
  };
  worker.postMessage('hello');
} else {
  // Web Workers are not supported in this environment.
  // You should add a fallback so that your program still executes correctly.
}