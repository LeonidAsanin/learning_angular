import { Component, signal } from '@angular/core';
import { HighlightDirective } from './directives/highlight.directive';
import { BoxComponent } from "./components/box/box.component";

@Component({
  selector: 'app-root',
  imports: [HighlightDirective, BoxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  color = signal('orange');
}

/*
  Built-in directives

  Attribute directives:
  1. [ngClass] - old way to set classes by expression. New way is [class]
  2. [ngStyle] - old way to set style by expression. New way is [style]
  3. [ngModel] - directive to display a data property and update that property when the user makes changes. Used for template-driven forms
  4. [ngSrc] - NgOptimizedImage directive makes it easy to adopt performance best practices for loading images

  Structural directives:
  1. *ngIf - old way to conditionally render elements. New way is @if
  2. *ngFor - old way to conditionally render elements. New way is @for
  3. *ngSwitch - old way to conditionally render elements. New way is @switch

*/