import { Component, ElementRef, inject, input, signal } from '@angular/core';

@Component({
  selector: 'app-base',
  imports: [],
  templateUrl: './base.component.html',
  styleUrl: './base.component.scss',
  host: {
    '(mouseover)': 'handleMouseOver()',
    '(mouseout)': 'handleMouseOut()',
  }
})
export class BaseComponent {
  protected state = signal('Base class');
  public input = input();

  protected elementRef = inject<ElementRef<HTMLElement>>(ElementRef);

  private handleMouseOver(): void {
    this.elementRef.nativeElement.style.fontWeight = 'bold';
  }

  private handleMouseOut(): void {
    this.elementRef.nativeElement.style.fontWeight = '';
  }
}
