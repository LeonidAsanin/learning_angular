import { Directive, ElementRef, inject, input, OnInit } from '@angular/core';
import { HighlightDirective } from './highlight.directive';

@Directive({
  selector: '[appBlush]',
  hostDirectives: [HighlightDirective]
})
export class BlushDirective implements OnInit {
  elementRef = inject(ElementRef);

  color = input('#ff3535');

  ngOnInit(): void {
    const element: HTMLElement = this.elementRef.nativeElement;
    element.addEventListener('click', () => {
      element.childNodes.forEach((childNode) => {
        if (childNode instanceof HTMLElement) {
          childNode.style.backgroundColor = this.color();
        }
      });
    });
  }
}
