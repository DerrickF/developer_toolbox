import { enableProdMode, importProvidersFrom } from '@angular/core';

import { environment } from './environments/environment';
import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app.component';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { routes } from './app/routes';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(App, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    importProvidersFrom(IonicModule.forRoot({})),
    provideRouter(routes),
  ],
}).catch((err) => console.error(err));