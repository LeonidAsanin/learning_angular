import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { Logger } from '../logger.service';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private state: string | null = null;
  private readonly complexState: { foo: { bar: string } } = { foo: { bar: '' } };
  private readonly signalState = signal<string | null>(null);
  private readonly signalComplexState = signal<{ foo: { bar: string } }>({ foo: { bar: '' } });

  logger = inject(Logger);

  getState(): string | null {
    return this.state;
  }

  getComplexState(): { foo: { bar: string } } {
    return this.complexState;
  }

  getSignalState(): WritableSignal<string | null> {
    return this.signalState;
  }

  getSignalComplexState(): WritableSignal<{ foo: { bar: string } }> {
    return this.signalComplexState;
  }

  setState(state: string | null): void {
    this.logger.debug(`Set new state: ${state}`);
    this.state = state;
    this.complexState.foo.bar = state ?? '';
    this.signalState.set(state);
    this.signalComplexState().foo.bar = state ?? '';
  }
}
