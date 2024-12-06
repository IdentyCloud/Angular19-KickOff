import { Injectable } from '@angular/core';
import { TranslateLoader } from '@ngx-translate/core';

import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class StaticTranslateLoader implements TranslateLoader {
    getTranslation(lang: string): Observable<any> {
        return from(this.importTranslation(lang)).pipe(
            map(translations => translations.default || translations)
        );
    }

    private async importTranslation(lang: string): Promise<any> {
        switch (lang) {
            case 'en':
                return await import('../translate/en.json');
            case 'es':
                return await import('../translate/es.json');
            case 'de':
                return await import('../translate/de.json');
            default:
                return {};
        }
    }
}