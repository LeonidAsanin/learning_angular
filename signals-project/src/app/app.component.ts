import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  effect,
  EffectCleanupRegisterFn,
  Signal,
  signal,
  untracked,
  WritableSignal,
} from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public value: WritableSignal<number> = signal(0);
  public isOdd: Signal<boolean> = computed(() => this.value() % 2 === 0);

  private readonly otherValue = signal('');

  // By default, signals use referential equality (Object.is() comparison).
  public complexState = signal(
    { foo: 0 },
    // { equal: (o1, o2) => o1.foo === o2.foo }
  );

  private readonly myEffect = effect(() => {
    console.log(`myEffect. isOdd: ${this.isOdd()}`);
  });

  constructor() {
    // Effects always execute asynchronously, during the change detection process
    // Effects always run at least once
    effect((cleanup: EffectCleanupRegisterFn) => {
      const value = this.value();
      console.log(`Current value: ${value}`);

      cleanup(() => {
        console.log(`Cleanup. prev:${value} ; new:${this.value()}`);
      });
    });

    effect(() => {
      let value;
      untracked(() => {
        value = this.value();
      });
      // const value = untracked(this.value);
      console.log(`Value: ${value}; Other value: ${this.otherValue()}`);
    });

    effect(() => {
      console.log(`Complex state: ${JSON.stringify(this.complexState())}`);
    });
  }

  public increment(): void {
    this.value.update((previousValue) => previousValue + 1);
  }

  public reset(): void {
    this.value.set(0);
  }

  public destroyMyEffect(): void {
    console.log('destroy my effect');
    this.myEffect.destroy();
  }

  public changeOtherValue(): void {
    this.otherValue.update((prev) => prev + Math.round(Math.random()));
  }

  public updateComplexState(): void {
    this.complexState.update((prev) => {
      this.complexState().foo++;
      return { ...prev };
      // return prev;
    });
  }

  public setStructurallySameComplexState(): void {
    const structurallySameState = { ...this.complexState() };
    this.complexState.set(structurallySameState);
  }
}
