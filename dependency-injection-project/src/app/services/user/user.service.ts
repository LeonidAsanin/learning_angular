import { inject, Injectable } from '@angular/core';
import { LogService } from '../log/log.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private logger = inject(LogService);

  // constructor(private logger: LogService) {}

  loadUser() {
    this.logger.log('Load user');
  }
}
