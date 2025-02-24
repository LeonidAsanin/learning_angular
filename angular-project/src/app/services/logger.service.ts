import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Logger {
  info(message: string, ...objects: any[]) {
    console.log(`[${new Date()}] [INFO] - ${message}`, ...objects);
  }

  debug(message: string, ...objects: any[]) {
    console.debug(`[${new Date()}] [DEBUG] - ${message}`, ...objects);
  }
}
