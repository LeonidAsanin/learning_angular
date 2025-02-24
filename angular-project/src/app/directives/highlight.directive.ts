import { Directive, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  host: {
    '(mouseenter)': 'onMouseEnter()', 
    '(mouseleave)': 'onMouseLeave()'
  }
})
export class HighlightDirective {
  elementRef = inject(ElementRef);
  appHighlight = input('yellow');

  onMouseEnter() {
    this.highlight(this.appHighlight());
  }

  onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.elementRef.nativeElement.style.backgroundColor = color;
  }

}
