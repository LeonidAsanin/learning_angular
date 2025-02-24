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
  // defaultColor = input('yellow');

  onMouseEnter() {
    let color = this.appHighlight();
    // color = color || this.defaultColor();
    // this.highlight(color);
    this.highlight('yellow');
  }

  onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.elementRef.nativeElement.style.backgroundColor = color;
    this.elementRef.nativeElement.style.fontWeight = color ? 'bold' : '';
  }

}
