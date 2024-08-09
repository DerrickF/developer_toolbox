import { enableProdMode, importProvidersFrom } from '@angular/core';

import { environment } from './environments/environment';
import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/routes';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
  ],
}).catch((err) => console.error(err));