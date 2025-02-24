import { Component, inject } from '@angular/core';
import { LogService } from '../../services/log/log.service';
import { DebugLogService } from '../../services/debug-log/debug-log.service';
import { logServiceFactory } from '../../services/log/log.service.provider';
import { ConfigService } from '../../services/config/config.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  // providers: [LogService] // New service for each HeaderComponent
  // providers: [
  //   {
  //     provide: LogService,
  //     useClass: DebugLogService, // New service for each HeaderComponent
  //   },
  // ],
  // providers: [
  //   {
  //     provide: LogService,
  //     useExisting: DebugLogService // One service for all HeaderComponents
  //   }
  // ]
  // providers: [
  //   {
  //     provide: LogService,
  //     useFactory: logServiceFactory,
  //     deps: [ConfigService]
  //   }
  // ]
  // viewProviders: [] // not visible to child nodes added by <ng-content />
})
export class HeaderComponent {
  logService = inject(LogService); // We cannot make injection by interface. Use InjectionToken instead

  constructor() {
    this.logService.log('Message to log');
  }
}
