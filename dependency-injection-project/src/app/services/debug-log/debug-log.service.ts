import { Injectable } from '@angular/core';
import { LogService } from '../log/log.service';

@Injectable({
  providedIn: 'root'
})
export class DebugLogService extends LogService {

  override log(...value: unknown[]) {
    console.debug(`DebugLogger[${this.id}]`, ...value);
  }
}
