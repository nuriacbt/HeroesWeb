import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeroesService } from './services/heroes.service';
import { provideHttpClient } from '@angular/common/http';
import { CarouselConfig } from '@coreui/angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideAnimationsAsync(), 
    provideHttpClient(),
    HeroesService,
    CarouselConfig
  ],
};
