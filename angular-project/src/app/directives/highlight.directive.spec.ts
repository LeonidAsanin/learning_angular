import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { HighlightDirective } from './highlight.directive';

@Component({
  template: `<div appHighlight="yellow">Test Highlight</div>`,
  imports: [HighlightDirective],
  providers: [HighlightDirective],
})
class TestComponent {}

describe('HighlightDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let testElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighlightDirective, TestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    testElement = fixture.nativeElement.querySelector('div');
  });

  it('should create an instance', () => {
    const directive = fixture.debugElement.injector.get(HighlightDirective);
    expect(directive).toBeTruthy();
  });

  it('should highlight the background on mouse enter', () => {
    const event = new Event('mouseenter');
    testElement.dispatchEvent(event);
    fixture.detectChanges();
    expect(testElement.style.backgroundColor).toBe('yellow');
  });

  it('should remove the highlight on mouse leave', () => {
    const event = new Event('mouseleave');
    testElement.dispatchEvent(event);
    fixture.detectChanges();
    expect(testElement.style.backgroundColor).toBe('');
  });
});