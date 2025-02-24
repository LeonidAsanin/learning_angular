import {
  Component,
  computed,
  DestroyRef,
  effect,
  inject,
  input,
  signal,
  SimpleChanges,
} from '@angular/core';
import { Logger } from '../../services/logger.service';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  incrementDelta = input(1, { alias: 'delta' });
  intervalDelta = input.required<number>();

  counter = signal(0);
  isEven = computed(() => this.counter() % 2 === 0);

  logger = inject(Logger);

  elements = signal([
    { id: 0, name: 'foo' },
    { id: 1, name: 'bar' },
  ]);

  effectRef;

  constructor(destroyRef: DestroyRef) {
    this.logger.info('[Constructor]', this.incrementDelta()); //inputs not initialized (default values)
    this.effectRef = effect((onCleanup) => {
      this.logger.info(`Run effect. count: ${this.counter()}`);
      const interval = setInterval(
        () => console.log('interval', this.counter()),
        this.intervalDelta()
      );
      onCleanup(() => clearInterval(interval));
    });
    destroyRef.onDestroy(() => {
      this.logger.info('[onDestroy] by destroyRef');
    });
  }

  ngOnInit() {
    this.logger.info('[ngOnInit]', this.incrementDelta()); //inputs initialized
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const inputName in changes) {
      const inputValues = changes[inputName];
      this.logger.info(
        `[ngOnChanges] 
        Previous ${inputName} == ${inputValues.previousValue}; 
        Current ${inputName} == ${inputValues.currentValue}; 
        Is first ${inputName} change == ${inputValues.firstChange}`
      );
    }
  }

  ngDoCheck() {
    this.logger.info('[ngDoCheck]');
  }

  ngOnDestroy() {
    this.logger.info('[ngOnDestroy]');
  }

  increment(event: MouseEvent) {
    this.logger.info('Increment', event);
    this.counter.update((previous) => previous + this.incrementDelta());
    // this.counter.set(this.counter() + 1)
    // this.counter.set(this.counter() + 1)
  }

  clear() {
    this.counter.set(0);
    this.effectRef.destroy();
  }
}
