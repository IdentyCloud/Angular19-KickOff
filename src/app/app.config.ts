import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { authInterceptor } from '@/app/auth/interceptors/auth.interceptor';
import { StaticTranslateLoader } from '@/app/services/translate-loader.service';

import { routes } from '@/app/app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([authInterceptor])
    ),
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useClass: StaticTranslateLoader
        },
        defaultLanguage: 'en'
      })
    )
  ]
};