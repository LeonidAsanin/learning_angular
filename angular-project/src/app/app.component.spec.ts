import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { headerSetterInterceptor } from './interceptors/header-setter.interceptor';
import { provideRouter, Router } from '@angular/router';
import { routes } from './app.routes';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        provideHttpClient(withInterceptors([headerSetterInterceptor])),
        provideHttpClientTesting(),
        provideRouter(routes),
      ],
    }).compileComponents();
  });

  it('should contain stateService', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.stateService).toBeTruthy();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'angular-project' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-project');
  });

  it('should set header to http request made by button click', () => {
    const httpTesting = TestBed.inject(HttpTestingController);

    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    const button = compiled.querySelector(
      '#testHttpClient'
    ) as HTMLButtonElement;
    button.click();

    const req = httpTesting.expectOne({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/todos/1',
    }, 'Request to load the configuration');
    // const req = httpTesting.expectOne('https://jsonplaceholder.typicode.com/todos/1');
    // expect(req.request.method).toBe('GET');

    expect(req.request.headers.get('X-Request-Id')).toBe('request-id-123');

    req.flush({});

    httpTesting.verify();
  });

  it('should redirect to page one by clicking corresponding button', fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    const button = compiled.querySelector(
      '#goToPageOneButton'
    ) as HTMLButtonElement;
    button.click();

    tick();

    expect(TestBed.inject(Router).url).toBe('/one');
  }));
});
