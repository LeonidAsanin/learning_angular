import { InjectionToken } from '@angular/core';

export interface AppConfig {
  title: string;
}

export const APP_CONFIG = new InjectionToken<AppConfig>(
  'app.config description'
);

const MY_APP_CONFIG_VARIABLE: AppConfig = {
  title: 'DI test',
};

export const provideAppConfig = () => {
  return {
    provide: APP_CONFIG,
    useValue: MY_APP_CONFIG_VARIABLE,
  };
};
