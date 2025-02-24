import { CommonModule, registerLocaleData } from '@angular/common';
import { Component, LOCALE_ID, signal } from '@angular/core';
import { KebabcasePipe } from '../../pipes/kebabcase.pipe';

// import ruLocale from '@angular/common/locales/ru';
// registerLocaleData(ruLocale);

@Component({
  selector: 'app-pipes-test',
  imports: [CommonModule, KebabcasePipe],
  templateUrl: './pipes-test.component.html',
  styleUrl: './pipes-test.component.scss',
  // providers: [
  //   { provide: LOCALE_ID, useValue: 'ru'},
  // ]
})
export class PipesTestComponent {
  title = signal('my title');
  date = signal(new Date());
  text = signal('MY text');
  object = signal({
    foo: 500,
    bar: null,
  });
  number = signal(Math.PI);
  promise = signal(Promise.resolve(500));
}
