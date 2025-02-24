import {
  AfterContentChecked,
  AfterContentInit,
  afterNextRender,
  afterRender,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  input,
  OnChanges,
  OnDestroy,
  OnInit,
  signal,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle-test',
  imports: [],
  templateUrl: './lifecycle-test.component.html',
  styleUrl: './lifecycle-test.component.scss',
})
export class LifecycleTestComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterViewInit,
    AfterContentChecked,
    AfterViewChecked,
    OnDestroy
{
  private readonly state = signal(100);
  public inputValue = input<string>();

  constructor() {
    console.log(
      `Constructor. State: ${this.state()}. Input: ${this.inputValue()}`
    );

    // Register a callback that executes after every render cycle.
    afterRender({
      read: () => {
        console.log('afterRender');
      }
    });

    // Registers a callback that executes ONLY ONCE after the next render cycle, when the DOM is loaded
    afterNextRender({
      read: () => {
        console.log('afterNextRender');
      }
    });
  }

  public changeState() {
    this.state.update((prev) => prev * 0.98);
  }

  ngOnInit(): void {
    console.log(`OnInit. State: ${this.state()}. Input: ${this.inputValue()}`);
  }

  // Runs after input changes
  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges', changes);
  }

  // Runs after input and state changes
  ngDoCheck(): void {
    console.log(`DoCheck. State: ${this.state()}. Input: ${this.inputValue()}`);
  }

  ngAfterContentInit(): void {
    console.log('AfterContentInit');
  }

  ngAfterViewInit(): void {
    console.log('AfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('AfterViewChecked');
  }

  ngAfterContentChecked(): void {
    console.log('AfterContentChecked');
  }

  ngOnDestroy(): void {
    console.log(
      `OnDestroy. State: ${this.state()}. Input: ${this.inputValue()}`
    );
  }
}
