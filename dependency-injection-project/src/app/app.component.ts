import { Component, inject } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { UserService } from './services/user/user.service';
import { LogService } from './services/log/log.service';
import { DebugLogService } from './services/debug-log/debug-log.service';
import { APP_CONFIG, AppConfig } from './config/app.config';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  // providers: [LogService]
  // providers: [
  //   {
  //     provide: LogService,
  //     useClass: DebugLogService,
  //   },
  // ],
  // providers: [
  //   {
  //     provide: UserService,
  //     // deps: [LogService]
  //   },
  //   {
  //     provide: LogService,
  //   },
  // ]
})
export class AppComponent {
  userService = inject(UserService);
  appConfig = inject(APP_CONFIG);
  // appConfig = inject(APP_CONFIG, { optional: true });

  constructor() {
    this.userService.loadUser();
  }
}
