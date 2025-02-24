import { Injectable } from '@angular/core';
import { Logger } from '../../interfaces/logger';

let counter = 0;

@Injectable({
  providedIn: 'root'
})
export class LogService implements Logger {
  protected id: number;

  constructor() {
    this.id = counter++;
  }

  log(...value: unknown[]) {
    console.info(`Logger[${this.id}]`, ...value);
  }
}
