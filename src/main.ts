import { InjectionToken } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

export const APP_CONFIG = new InjectionToken("");

// fetch('/assets/config.json')
//   .then(response => response.json())
//   .then(config => {
//     platformBrowserDynamic([{ provide: APP_CONFIG, useValue: config }])
//       .bootstrapModule(AppModule)
//       .catch(err => console.log(err));
//   });


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
